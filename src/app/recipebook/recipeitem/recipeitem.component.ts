import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.scss']
})
export class RecipeitemComponent implements OnInit {

  @Input() recipeItem:Recipe ;
  @Input() index:number ;
  
  constructor() {
   }

  ngOnInit() {
  }

}
