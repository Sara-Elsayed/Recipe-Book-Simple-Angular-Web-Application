import { Injectable } from '@angular/core';
import {Recipe} from '../model/recipe.model'
import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  
    private recipes : Recipe[]=[
       new Recipe(
          'Lemon Pepper Chicken recipe',
          'coco recipe',
          '../../../assets/images/1.jpg',
          [
             new Ingredient('Swanson Chicken Broth',1),
             new Ingredient('lemons',2),
          ]
       ),
       new Recipe(
         'Fettuccine with White Truffle Butter recipe',
         'coco recipe',
         '../../../assets/images/2.jpeg',
         [
            new Ingredient('Fresh fettuccine',1),
            new Ingredient('cremini mushrooms',10),
         ]
      ),
      new Recipe(
         'Taco Lime Shrimp recipe',
         'shosho recipe',
         '../../../assets/images/3.jpeg',
         [
            new Ingredient('Medium shrimp',5),
            new Ingredient('limes',3),
         ]
      ),
   ];
   constructor(private slService : ShoppingListService){}
   
   getRecipes(){
      return this.recipes.slice(); 
   } 
   getRecipe(id : number){
      return this.recipes[id]; 
   }
   addIngredientToShoppingList(ingredients : Ingredient[] ){
      this.slService.addIngredients(ingredients);
   }


};