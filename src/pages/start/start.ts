import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../user/login/login';
import { RegisterPage } from '../user/register/register';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }
  goToRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
