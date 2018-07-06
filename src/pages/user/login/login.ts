import { PayuPage } from './../../payu/payu';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Events, ViewController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { NgForm} from '@angular/forms';

import { HomePage } from './../../home/home';
import { UserProvider } from './../../../providers/user/user';

import * as shajs from 'sha.js';
import { FinancerPage } from '../../appointment/financer/financer';
import { CardPage } from '../../card/card';
import { AuthorizationPublicProvider } from '../../../providers/authorization-public/authorization-public';


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
  private authPublic;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: UserProvider,
              public alertCtrl: AlertController,
              public events: Events,
              public viewCtrl: ViewController,
              public authPvr: AuthorizationPublicProvider) {
      this.hora = this.navParams.get('hora');
      this.doctor = this.navParams.get('doctor');
      this.available = this.navParams.get('available');

      this.authPvr.getKey().subscribe(data =>{
        this.authPublic = data;
        localStorage.setItem('authorization', this.authPublic.authorization);
        localStorage.setItem('role', this.authPublic.role);
      });

      localStorage.removeItem('idTokenUser');
      localStorage.removeItem('emailUser');
      // localStorage.removeItem('authorization');
      // localStorage.removeItem('role');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  startSesion(formulario: NgForm){
    this.userService.doSignIn(formulario.value.email.toLowerCase(), formulario.value.password.toLowerCase())
    .subscribe(
      data => {
        this.msg = "";
        localStorage.setItem('idTokenUser', data.patientId);
        localStorage.setItem('emailUser', formulario.value.email);
        localStorage.setItem('authorization', data.authorization);
        localStorage.setItem('role', data.role);
        localStorage.setItem('patientName', data.patientName);
        this.events.publish('user:logged', 'logged');
        if( !this.hora )
        this.navCtrl.push(HomePage )
        else
          this.navCtrl.setRoot(CardPage, {hora: this.hora, available: this.available , doctor:this.doctor });
      },
      err => {
        this.msg = "Usuario o contraseña incorrecta."
      }
    )
  }

  registrarUsuario(){
    if(this.hora !== undefined)
      this.navCtrl.setRoot(RegisterPage , {hora: this.hora, available: this.available, doctor: this.doctor, texto: "viene con data"});
    else
      this.navCtrl.push(RegisterPage, {texto: "vienen sin data"});
  }

  goToHome(){
    this.navCtrl.push(HomePage);
  }
}
