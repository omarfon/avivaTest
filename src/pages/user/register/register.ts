import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from '../login/login';
import { UserProvider } from '../../../providers/user/user';
import { CrudparentProvider } from '../../../providers/crudparent/crudparent';
import * as shajs from 'sha.js';
import { CodePage } from '../../code/code';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public msg: string;
  public registerForm: FormGroup;

  private pageFrom;
  private headquarterId;
  private specialty;
  private date;

  private hora;
  private available;
  private doctor;
  private texto;

  private resolve;

cambio:boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public fb: FormBuilder,
              public userProvider: UserProvider,
              public crudPvr: CrudparentProvider) {

    this.hora = this.navParams.get('hora');
    this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available');
    this.texto = this.navParams.get('texto');
    console.log(this.hora, this.available,this.doctor, this.texto);


    this.registerForm = this.fb.group({
      name: ['',  [ Validators.required ]],
      surname1: ['',  [ Validators.required ]],
      surname2: ['',  [ Validators.required ]],
      gender: ['',  [ Validators.required ]],
      birthdate: ['',  [ Validators.required ]],
      documentType: ['',  [ Validators.required ]],
      documentNumber: ['',  [ Validators.required]],
      phone: ['',  [ Validators.required, Validators.minLength(9), Validators.maxLength(9) ]],
      email: ['',  [ Validators.required, Validators.email ]],
      password: ['',  [ Validators.required, Validators.minLength(8) ]]
      // password_confirmation: ['',  [ Validators.required ]]
    });
    // , {validator: this.areEqual('password', 'password_confirmation')}
  }


  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  seeConditions(){
    let terminos = this.alertCtrl.create({
      title:'Terminos y Condiciones',
      message:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
      buttons: ['OK']
    })
    terminos.present();
  }

  // areEqual(passwordKey: string, passwordConfirmationKey: string) {
  //   return (group: FormGroup) => {
  //     let passwordInput = group.controls[passwordKey];
  //     let passwordConfirmationInput = group.controls[passwordConfirmationKey];
  //     if (passwordInput.value !== passwordConfirmationInput.value) {
  //       return passwordConfirmationInput.setErrors({notEquivalent: true})
  //     }
  //   }
  // }

  changue(){
    this.cambio = true;
  }

    registerNewUser(){
      let data = this.registerForm.value;
      let datos:any ={
        email          : data.email,
        password       : shajs('sha256').update(data.password).digest('hex'),
        name           : data.name,
        surname1       : data.surname1,
        surname2       : data.surname2,
        birthdate      : data.birthdate,
        gender         :{
            id         : "2",
            name       : data.gender
        },
        documentType   :{
            id         : "1",
            name       : data.documentType
        },
        documentNumber : data.documentNumber,
        phone          : data.phone
        // code           : "123"
      }

      let email = {email:datos.email}
      this.crudPvr.validateEmail(email).subscribe(data =>{
        this.resolve = data;
        // console.log(this.resolve);
        if(this.resolve.result == "ok"){
          this.navCtrl.push(CodePage, {
            datos: datos , hora : this.hora , availables: this.available , doctor: this.doctor
          });
        }else{
            console.log("mantener por error hasta solucionar el error");
        }
      });
    }

}
