import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from '../login/login';
import { UserProvider } from '../../../providers/user/user';




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
  private doctor;
  private date;
  private hour;

cambio:boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public fb: FormBuilder,
              public userProvider: UserProvider) {

    if(navParams.get('pageFrom')){
      this.headquarterId = navParams.get('headquarter');
      this.specialty = navParams.get('specialty');
      this.pageFrom = navParams.get('pageFrom');
      this.doctor = navParams.get('doctor');
      this.date = navParams.get('date');
      this.hour = navParams.get('hour');
    }

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
      password: ['',  [ Validators.required, Validators.minLength(8) ]],
      password_confirmation: ['',  [ Validators.required ]]
    }, {validator: this.areEqual('password', 'password_confirmation')});
  }

  registrarUsuario(formModel){
    this.userProvider.doSignUp(formModel)
     .subscribe( 
        data => {
          this.msg = "";
          if(this.pageFrom == 'payment')
          this.navCtrl.push(LoginPage)
            // this.navCtrl.push(LoginPage, { headquarter: this.headquarterId, specialty: this.specialty, doctor: this.doctor, date: this.date, hour: this.hour, pageFrom: this.pageFrom })
          else
            this.navCtrl.push(LoginPage)
        },
        err => {
          this.msg = err.errors.full_messages[0]
        }
      )
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

  areEqual(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
    }
  }
  
  changue(){
    this.cambio = true;
  }
}
