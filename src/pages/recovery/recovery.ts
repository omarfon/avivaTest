import { RecoverycodePage } from './../recoverycode/recoverycode';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class RecoveryPage {

  public formCode: FormGroup;
  public datos;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public form: FormBuilder,
              public usrPvr: UserProvider,
              public alertCtrl: AlertController) {

                this.formCode = this.form.group({
                  email : []
              });
              console.log(this.formCode.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoveryPage');
  }

  saveData(){
    let email = this.formCode.value.email;
    console.log('lo que se almacena en correo:', email);
    this.usrPvr.sendValidation(email).subscribe(data =>{
        this.datos = data;
        if(this.datos.result == 'ok'){
          this.navCtrl.push(RecoverycodePage , {
            datos:this.datos
      });
        }else{
          let alert = this.alertCtrl.create({
            title:"Correo no valido",
            message:"talvez el correo no es correcto o el correo no fue registrado",
            buttons: ['volver a intentar']
        })
        alert.present()
        }
    })
  }

}
