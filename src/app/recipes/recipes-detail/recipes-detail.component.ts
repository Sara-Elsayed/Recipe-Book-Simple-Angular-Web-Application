import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  reciepe: Recipe;
  id: number;
  // isopen:boolean= false;
  
  constructor( private reciepeService : RecipeService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params : Params) =>{
        this.id = +params['id'];
        this.reciepe = this.reciepeService.getRecipe(this.id);
      }
    );
    console.log(this.route.params)
  }
  onAddToShoppingList(){
    this.reciepeService.addIngredientToShoppingList(this.reciepe.ingredients);
  
  }
  onEditRecipe(){
    this.router.navigate(['edit'] , {relativeTo: this.route})
  }

}
