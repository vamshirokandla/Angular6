import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppinglistService } from './shoppinglist.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingrediants:Ingrediants[] ;
  private subscription:Subscription;
  private startedEditSubscription:Subscription;
  constructor(private shoppinglistService:ShoppinglistService) { }

  ngOnInit() {
    this.ingrediants = this.shoppinglistService.getIngrediants();
    this.subscription = this.shoppinglistService.ingrediantsCHnaged.subscribe(
      (ingrediantslist:Ingrediants[])=>{
        this.ingrediants = ingrediantslist;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEditItem(index:number){

    console.log("index selected:"+index);
    this.shoppinglistService.startedEditing.next(index);

    // const ingrediant = this.shoppinglistService.getIngrediants()[index];

  }


}
