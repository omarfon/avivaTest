// import { UserProvider } from '../../../providers/user/user';
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import * as shajs from 'sha.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProvider } from '../../../providers/user/user';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  private email;
  private password;
  public datosUser;
  public fotoId = localStorage.getItem('image');
  private url = "http://dappapache02.eastus.cloudapp.azure.com:4200" ;
  public foto;

  public formCode: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public form: FormBuilder,
              public alertCtrl: AlertController,
              public userPvr: UserProvider) {
                this.formCode = this.form.group({
                  oldPassword  : [],
                  password   : ['', [Validators.required]],
                  passwordRepeat   : ['', [Validators.required]]
              });
              // public userPvr: UserProvider
      this.foto = this.url + `${this.fotoId}`;
      console.log(this.foto);
  }

  validacion(){
    const valid = this.formCode.value;
    if(valid.password == valid.passwordRepeat){
      return true;
    }else{
      return false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  getImage(){
    console.log('obteniendo imagen de camara');
  }

  changePassword(){
    let password = this.formCode.value.oldPassword;
    let passwordNew = this.formCode.value.password;

this.userPvr.changePassword(password , passwordNew ).subscribe(data =>{
        if(data.result == 'ok'){
            let alert = this.alertCtrl.create({
                title : "Cambio de Contraseña",
                subTitle: `${data.message}`,
                buttons: [{
                  text: 'Ok',
                  handler: ()=>{
                    localStorage.removeItem('idTokenUser');
                    localStorage.removeItem('emailUser');
                    localStorage.removeItem('passUser');
                    localStorage.removeItem('authorization');
                    localStorage.removeItem('role');
                    localStorage.removeItem('patientName');
                    localStorage.removeItem('image');
                    this.navCtrl.push(LoginPage);
                  }
                }]
            });
            alert.present();
        }else{
          let alert = this.alertCtrl.create({
            title : `${data.error.message}`,
            subTitle: `${data.error.help}`,
            buttons: ['Volver a intentar']
        });
        alert.present();
        }
});
}

}
