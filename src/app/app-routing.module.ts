import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipestartComponent } from './recipebook/recipestart/recipestart.component';
import { RecipedetailsComponent } from './recipebook/recipedetails/recipedetails.component';
import { RecipeeditComponent } from './recipebook/recipeedit/recipeedit.component';



const appRoutes: Routes = [
  { path: '', redirectTo:'/recipe', pathMatch: 'full' },
  { path: 'recipe', component: RecipebookComponent,children:[
    { path: '', component: RecipestartComponent},
    { path: 'new', component: RecipeeditComponent},
    { path: ':id', component: RecipedetailsComponent},
    { path: ':id/edit', component: RecipeeditComponent},
    

  ]},
  { path: 'shoppinglist', component:ShoppingListComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
