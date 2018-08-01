import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';


@Component({
  selector: 'page-detail-recipe',
  templateUrl: 'detail-recipe.html',
})
export class DetailRecipePage {

  private recipe;
  private recetas;
  private date;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

                this.recipe = this.navParams.get('recipe');
                this.recetas = this.recipe.prescripciones;
                this.date = this.recipe.prescripciones[0];
                console.log('el resultado:', this.recipe);
                console.log('los datos:', this.date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailRecipePage');
  }

}
