import { RecipesProvider } from './../../../providers/recipes/recipes';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { DetailRecipePage } from '../../detail-recipe/detail-recipe';
import * as moment from 'moment';
import { SELECT_MULTIPLE_PANEL_PADDING_X } from '@angular/material';


@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {


  public recipes;
  public _recipes;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public recipesPvr: RecipesProvider) {

  this.recipesPvr.getAllRecipes().subscribe(data =>{
    this.recipes = data;
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
