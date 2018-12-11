import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Events, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-recoverycode',
  templateUrl: 'recoverycode.html',
})
export class RecoverycodePage {

  private datos;
  public formCode: FormGroup;
  private code;
  public logeo;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public form: FormBuilder,
              public usrPvr: UserProvider,
              public events: Events,
              public alertCtrl: AlertController) {
        this.datos = this.navParams.get('datos');
        console.log(this.datos);

        this.formCode = this.form.group({
          primero : [],
          segundo : [],
          tercero : [],
          cuarto  : [],
          password   : ['', [Validators.required]],
          passwordRepeat   : ['', [Validators.required]]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoverycodePage');
  }

  validacion(){
    const valid = this.formCode.value;
    if(valid.password == valid.passwordRepeat){
      return true;
    }else{
      return false;
    }
  }

  saveData(){
    let codigo = this.formCode.value;
    // console.log('codigo:', codigo);
    let uno = codigo.primero;
    let dos = codigo.segundo;
    let tres = codigo.tercero;
    let cuatro = codigo.cuarto;
    let code = uno + dos + tres + cuatro;
    // console.log(code);
    this.datos.code = code;
    this.datos.password = this.formCode.value.password;
    console.log('datos.code:', this.datos);
    // this.datos.id = this.code.id;
    // console.log('data armada:', this.datos);

  this.usrPvr.recoveryLogin(this.datos).subscribe(data => {
        this.logeo = data;
        if(this.logeo.ok == false){
          console.log('el logeo:', this.logeo);
          let alert = this.alertCtrl.create({
            title:`Error en la operación`,
            message:`${this.logeo.error.help}`,
            buttons: ['volver a intentar']
          });
          alert.present();
        }else{
          localStorage.setItem('usuario', this.logeo.userEmail);
         localStorage.setItem('email', this.logeo.userEmail);
         localStorage.setItem('authorization', this.logeo.authorization);
         localStorage.setItem('id', this.logeo.patientId);
         localStorage.setItem('role', this.logeo.role);
         localStorage.setItem('photoUrl', this.logeo.photoUrl);
         localStorage.setItem('patientName', this.logeo.patientName);
          this.events.publish('user:logged', 'logged');
            console.log('this.logeo:', this.logeo);
            let alert = this.alertCtrl.create({
              title:"Cuenta recuperada",
              message:"su cuenta se ha recuperado exitosamente",
              buttons: [
                {
                  text:'ok'
                }
              ]
            })
            alert.present();
            this.navCtrl.setRoot(HomePage);
        }
      });
}

 }

