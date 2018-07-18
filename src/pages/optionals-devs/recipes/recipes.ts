import { RecipesProvider } from './../../../providers/recipes/recipes';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { DetailRecipePage } from '../../detail-recipe/detail-recipe';


@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {


  public recipes;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public recipesPvr: RecipesProvider) {

    // ahora esta implementado así.... pero no funcionará
    // porque lo que tiene que pasar es tener un endpoint que me traiga todos las recetas

    // this.recipesPvr.getAllRecipes().subscribe(data=>{
    //   this.recipes = data;
    //   console.log(this.recipes);

    this.recipesPvr.getAllRecipes().subscribe((data:any) =>{
        this.recipes = data;
        console.log(this.recipes);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipesPage');
  }

  goToDetailRecipe(recipe){
    this.navCtrl.push(DetailRecipePage, {
      recipe:recipe
    })
  }
}
