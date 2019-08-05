import {Ingredient} from '../model/ingredient.model'
import { Subject } from 'rxjs';

export class ShoppingListService {
    
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing =  new Subject<number>();
    private ingredients : Ingredient [] =[
     
      ];
    
    getIngredients(){
        return this.ingredients.slice();
    }
    
    getIngredient(index : number){
      return this.ingredients[index];
    }
    addIngrediant(ingredient : Ingredient){
         this.ingredients.push(ingredient);
         this.ingredientsChanged.next(this.ingredients.slice());
      }

    addIngredients(ingredients : Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number , newIngredient : Ingredient){
      this.ingredients[index] = newIngredient;
      this.ingredientsChanged.next(this.ingredients.slice())
    }
    DeleteIngredient(index: number){
      this.ingredients.splice(index,1);
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}
