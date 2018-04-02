// import { UserProvider } from '../../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as shajs from 'sha.js';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private email;
  private password;
  public datosUser;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
              // public userPvr: UserProvider
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    // let email = localStorage.getItem('emailUser');
    // let password = localStorage.getItem('passUser');
    // console.log(email, password);
    //   this.userPvr.diSignInPassword(this.email, this.password).subscribe(data=>{
    //     this.datosUser = data;
    //     console.log(this.datosUser);
    //   });
  }

}
