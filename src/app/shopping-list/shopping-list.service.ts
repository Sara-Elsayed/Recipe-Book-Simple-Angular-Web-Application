import {Ingredient} from '../model/ingredient.model'
import { Subject } from 'rxjs';

export class ShoppingListService {
    
  ingredientsChanged = new Subject<Ingredient[]>();
    
    private ingredients : Ingredient [] =[
     
      ];
    
    getIngredients(){
        return this.ingredients.slice();
    }
    
    addIngrediant(ingredient : Ingredient){
         this.ingredients.push(ingredient);
         this.ingredientsChanged.next(this.ingredients.slice());
      }

    addIngredients(ingredients : Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
      console.log("am in ");
    }
}
