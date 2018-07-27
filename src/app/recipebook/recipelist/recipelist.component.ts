import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit {

  recipes: Recipe[] ;

  constructor(private recipeService:RecipeService,private router:Router,
  private actRouter:ActivatedRoute) {    
   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes = recipes;
      }
    );
  }

  onselectNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.actRouter});
  }


}
