import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detail-recipe',
  templateUrl: 'detail-recipe.html',
})
export class DetailRecipePage {

  private recipe;
  private recetas;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

                this.recipe = this.navParams.get('recipe');
                this.recetas = this.recipe.prescripciones;
                console.log('la receta:', this.recipe);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailRecipePage');
  }

}
