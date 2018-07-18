import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  private recipes;
  private recetas;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
      this.recipes = navParams.get('recipe');
      this.recetas = this.recipes[0].prescripciones;
      console.log('recipe', this.recetas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');
  }

}
