import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../user/login/login';
import { CardPage } from './../card/card';


@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {
 private hora;
 private doctor;
 private available;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.hora = navParams.get('hora');
    this.available = navParams.get('available');
    this.doctor = navParams.get('doctor');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
  }
  goToLogin(){
    this.navCtrl.push(LoginPage,{
      hora:this.hora,
      available: this.available,
      doctor: this.doctor
      
    });
    console.log('datos de datos:',this.hora, this.available, this.doctor);
      //aqui tiene que ir el dismiss
  }
  goToCard(){
    this.navCtrl.push(CardPage);
  }

}
