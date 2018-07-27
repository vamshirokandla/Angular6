import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] =[
    new Recipe('Chicken Biryani','Biryani with chicken pieces',
    'https://www.daringgourmet.com/wp-content/uploads/2013/03/Machboos-2-sm_edited.jpg',
    [
      new Ingrediants("rice",3),
      new Ingrediants("chicken",2),
      new Ingrediants("masala",3)
    ]
  ),
    new Recipe('Mutton Biryani','Biryani with mutton pieces',
    'https://i2.wp.com/kalimirchbysmita.com/wp-content/uploads/2017/09/Hyderabadi-Kacchi-Biryani-01.jpg',
    [
      new Ingrediants("rice",3),
      new Ingrediants("mutton",2),
      new Ingrediants("masala",3)
    ])
  ];

    constructor(private shoppingListService:ShoppinglistService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe( index:number){
     return this.recipes[index];    
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    console.log("Called add recipe");
    this.recipeChanged.next(this.recipes.slice());
  }

  editRecipe(index:number,recipe:Recipe){
    console.log("Called edit recipe"+index+", onject"+recipe.name+","+recipe.description);
    this.recipes[index]=recipe;
    
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    console.log("Called delete recipe");
    this.recipeChanged.next(this.recipes.slice());
  }

  
  addIngrediantsToShoppingList(ings:Ingrediants[]){
    console.log("Called add ingrediants...");
    this.shoppingListService.addIngrediants(ings);
    // console.log("ingrediants..."+ingrediants);
    // this.ingrediantsCHnaged.emit(this.ingrediants.slice());
  }

}
