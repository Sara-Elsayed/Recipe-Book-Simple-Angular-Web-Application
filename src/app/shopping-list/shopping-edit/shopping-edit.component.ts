import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from '../../model/ingredient.model';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem : Ingredient;
  
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.slService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true; 
        this.editedItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form : NgForm) {
  const value = form.value;
  const newIngedient = new Ingredient(value.name,value.amount);
  if(this.editMode){
    this.slService.updateIngredient(this.editedItemIndex,newIngedient)
  }else{
    this.slService.addIngrediant(newIngedient);
  }
  this.editMode = false;
  form.reset();
  }

  onDelete(){
    this.slService.DeleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
