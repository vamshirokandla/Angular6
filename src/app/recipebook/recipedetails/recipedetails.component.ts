import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingrediants } from '../../shared/ingrediants.model';
import { ShoppinglistService } from '../../shopping-list/shoppinglist.service';
import { RouterState, Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {

   recipe:Recipe;
  recipeId:number;

  constructor(private recipeService:RecipeService,private route:Router,private actiavtedRoute:ActivatedRoute) {

    // recipeService.onRecipeWasSelected.subscribe(){
    //   (item)==> this.recipe;
    // }
   }

  ngOnInit() {
    console.log(this.actiavtedRoute.snapshot.queryParams);
    console.log(this.actiavtedRoute.snapshot.fragment);
    this.actiavtedRoute.params
        .subscribe( (params:Params)=>{
          this.recipeId = +params["id"];
          this.recipe = this.recipeService.getRecipe(this.recipeId);
        })
  }

  addToShoppingList(){
    // add the ingrediants of the current recipe to the shopping list.
    const ingrediants:Ingrediants[] = this.recipe.ingrediants;
    // this.shoppinglistService.addIngrediants(ingrediants);
    this.recipeService.addIngrediantsToShoppingList(ingrediants);

    console.log("called shopping list service to add ingrediants..");

  }

  onEditRecipe(){
    this.route.navigate(['edit'],{relativeTo:this.actiavtedRoute});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeId);
    this.route.navigate(['/recipes'],{relativeTo:this.actiavtedRoute});
  }

}
