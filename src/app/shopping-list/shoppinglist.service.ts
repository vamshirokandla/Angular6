import { Injectable, EventEmitter } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  ingrediantsCHnaged = new Subject<Ingrediants[] >();
   startedEditing = new Subject<number >();

  private ingrediants:Ingrediants[] = [
    new Ingrediants('apple',10),
    new Ingrediants('mangos',15),
  ];

  // newIngrediantAdded  =new EventEmitter<Ingrediants>();

  constructor() { }

  getIngrediants(){
    return this.ingrediants.slice();
  }

  getIngrediant(index:number){
    return this.ingrediants[index];
  }

  editIngrediant(index:number,ingrediant:Ingrediants){
    this.ingrediants[index] = ingrediant;
    this.ingrediantsCHnaged.next(this.ingrediants.slice());
  }
  deleteIngrediant(index:number){
    this.ingrediants.splice(index,1);
    this.ingrediantsCHnaged.next(this.ingrediants.slice());
  }

  addIngrediant(ingrediant:Ingrediants){
    this.ingrediants.push(ingrediant);
    this.ingrediantsCHnaged.next(this.ingrediants.slice());
  }

  addIngrediants(ings:Ingrediants[]){
    console.log("Called add ingrediants...");
    for(let ing of ings){
      this.ingrediants.push(ing);
    }
    // this.ingrediants.concat(ings);
    // console.log("ingrediants..."+ingrediants);
    this.ingrediantsCHnaged.next(this.ingrediants.slice());
  }
}
