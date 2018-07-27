import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {

  recipeId:number;
  editMode =false;
  recipeForm:FormGroup;

  constructor(private router:Router,private route:ActivatedRoute,
                      private recipeService:RecipeService) { }

  ngOnInit() {

    this.route.params
    .subscribe((params:Params)=>{ 
      console.log(" In recipe edit component...!");
      this.recipeId = +params['id'];
      this.editMode = params['id'] !=null;
      this.initForm();
    })
  }

  private initForm(){

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngrediants = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.recipeId);
      recipeName =  recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if(recipe['ingrediants']){

        for(let ingrediant of recipe.ingrediants){
          recipeIngrediants.push(
            new FormGroup({
              'name': new FormControl(ingrediant.name,Validators.required),
              'amount':new FormControl(ingrediant.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName,Validators.required),
        'imagePath': new FormControl(recipeImagePath,Validators.required),
        'description': new FormControl(recipeDescription,Validators.required),
        'ingrediants': recipeIngrediants

    });
  }

  onSubmit(){
    console.log(" Form submitted....!");

    const recipeToBeAddedUpdated2 = new Recipe(
                                      this.recipeForm.value['name'],
                                      this.recipeForm.value['description'],
                                      this.recipeForm.value['imagePath'],
                                      this.recipeForm.value['ingrediants']
                                    );

      const recipeToBeAddedUpdated =                    this.recipeForm.value;

      console.log("Called edit recipe: "+this.recipeId+", object:"+recipeToBeAddedUpdated.name+","+recipeToBeAddedUpdated.description);

    if(this.editMode){
      this.recipeService.editRecipe(this.recipeId,recipeToBeAddedUpdated);
    }
    else{
      this.recipeService.addRecipe(recipeToBeAddedUpdated);
    }

    this.editMode = false;

    this.onCancel();
  }


  ondelete(){
    console.log(" Form Delete submitted....!");


    if(this.editMode){
      this.recipeService.deleteRecipe(this.recipeId);
    }
    // else{
    //   this.recipeService.addRecipe(recipeToBeAddedUpdated);
    // }

    this.editMode = false;
    this.onCancel();
  }


    onAddIngrediant() {
      (<FormArray>this.recipeForm.get('ingrediants')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'amount': new FormControl(null, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        })
      );
    }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
    // this.router.navigate(['/recipe'],{relativeTo:this.route});
    
  }

  

}
