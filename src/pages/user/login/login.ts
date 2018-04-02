import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Events, ViewController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { NgForm} from '@angular/forms';

import { HomePage } from './../../home/home';
import { UserProvider } from './../../../providers/user/user';

import * as shajs from 'sha.js';
import { FinancerPage } from '../../appointment/financer/financer';
import { CardPage } from '../../card/card';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public msg;
  private pageFrom;
  private hora;
  private doctor;
  private available;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public userService: UserProvider,
              public alertCtrl: AlertController,
              public events: Events,
              public viewCtrl: ViewController) {
      this.hora = this.navParams.get('hora');
      this.doctor = this.navParams.get('doctor');
      this.available = this.navParams.get('available');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  startSesion(formulario: NgForm){
    this.userService.doSignIn(formulario.value.email.toLowerCase(), formulario.value.password.toLowerCase())
    .subscribe( 
      data => {
        this.msg = "";
        console.log('data login', data);
        localStorage.setItem('idTokenUser', data.patientId);
        localStorage.setItem('emailUser', formulario.value.email);
        // localStorage.setItem('passUser', formulario.value.password);
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('role', data.role);
        // XXX: Send event for login user. This is for trigger event in app.component for show menus when user is logged.
        this.events.publish('user:logged', 'logged');
        if( this.hora !== '' )
        this.navCtrl.push(FinancerPage , {hora: this.hora, available: this.available , doctor:this.doctor })
        else
          this.navCtrl.push(HomePage);
      },
      err => {
        this.msg = "Usuario o contraseña incorrecta."
      }
    )
  }

  registrarUsuario(){
    if( this.pageFrom == 'payment' )
    // { headquarter: this.headquarterId, specialty: this.specialty, doctor: this.doctor, date: this.date, hour: this.hour, pageFrom: this.pageFrom }
      this.navCtrl.push(RegisterPage );
    else
      this.navCtrl.push(RegisterPage);
  }
  goToHome(){
    this.navCtrl.push(HomePage);
  }
}
