import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipebook/recipeitem/recipeitem.component';
import { RecipedetailsComponent } from './recipebook/recipedetails/recipedetails.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './/app-routing.module';
import { RecipestartComponent } from './recipebook/recipestart/recipestart.component';
import { RecipeeditComponent } from './recipebook/recipeedit/recipeedit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipebookComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    RecipestartComponent,
    RecipeeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
