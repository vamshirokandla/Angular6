import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingrediants } from '../../shared/ingrediants.model';
import { ShoppinglistService } from '../shoppinglist.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') slForm :NgForm;
  private startedEditingSubscription:Subscription;
  editMode = false;
  editedItemIndex:number;
  editedItem:Ingrediants;


 constructor(private shoppinglistService:ShoppinglistService) { }


 ngOnInit() {

    this.startedEditingSubscription = this.shoppinglistService.startedEditing.subscribe(
    (index:number)=>{
      this.editMode = true;
      this.editedItemIndex = index;
  // `editedItem:Ingrediants;
   this.editedItem = this.shoppinglistService.getIngrediants()[index];
   this.slForm.setValue({
     name: this.editedItem.name,
     amount: this.editedItem.amount
   })
  }
  );
 }

 ngOnDestroy(){
   this.startedEditingSubscription.unsubscribe();
 }

 onAddIngrediant(form:NgForm){
  
  const value =form.value;

   const addedIngrediant = new Ingrediants(value.name,value.amount);
  //  this.shoppinglistService.newIngrediantAdded.emit(addedIngrediant);

  console.log("Edit mode:"+this.editMode)
  if(this.editMode){
    this.shoppinglistService.editIngrediant(this.editedItemIndex,addedIngrediant);
  }
  else{
    this.shoppinglistService.addIngrediant(addedIngrediant);
  }

  this.editMode = false;
   this.slForm.reset();
   form.reset();

 }

 onDeleteItem(form:NgForm){  
  const value =form.value;
   const addedIngrediant = new Ingrediants(value.name,value.amount);

  console.log("Edit mode:"+this.editMode)
  if(this.editMode){
    this.shoppinglistService.deleteIngrediant(this.editedItemIndex);
  }  

  this.editMode = false;
  form.reset();

 }


 onClear(form:NgForm){  
  
  this.editMode = false;
  form.reset();

 }



}
