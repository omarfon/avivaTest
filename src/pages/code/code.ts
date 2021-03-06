import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudparentProvider } from '../../providers/crudparent/crudparent';
import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FinancerPage } from '../appointment/financer/financer';
import { UserProvider } from '../../providers/user/user';


@Component({
  selector: 'page-code',
  templateUrl: 'code.html',
})
export class CodePage {

  private datos;
  private email;
  private code;
  public formCode: FormGroup;
  public createOk;

  public hora;
  public available;
  public doctor;

  public loginOk;
  public result;


  constructor(public navCtrl:     NavController,
              public navParams:   NavParams,
              public crudPvr:     CrudparentProvider,
              public form:        FormBuilder,
              public userService: UserProvider,
              public events:      Events) {

      this.hora = this.navParams.get('hora');
      this.available = this.navParams.get('available');
      this.doctor = this.navParams.get('doctor');

      this.datos = this.navParams.get('datos');
      this.result = this.navParams.get('resolve');
      this.formCode = this.form.group({
          primero : [],
          segundo : [],
          tercero : [],
          cuarto  : []
      });
      console.log(this.formCode.value);
      console.log(this.formCode.value.primero);

    console.log('los datos que vienen de registro', this.datos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CodePage');
  }

  saveData(){
    let codigo = this.formCode.value;
    let uno = codigo.primero;
    let dos = codigo.segundo;
    let tres = codigo.tercero;
    let cuatro = codigo.cuarto;
    let code = uno + dos + tres + cuatro;
    console.log(code);
    this.datos.code = code;
    this.datos.id = this.result.id;
    console.log('data armada:', this.datos);
    this.crudPvr.createNewUser(this.datos).subscribe(data =>{
      this.createOk = data;

      // console.log('data que viene de la creación:', data);
     let email = this.createOk.email;
     let password = this.createOk.passwordHash;

     this.userService.doSignInforNewRegister(email, password).subscribe(data =>{
        this.loginOk = data;

      // console.log('datos que vienen del logueo: por registro:', this.loginOk);
        localStorage.setItem('idTokenUser', this.loginOk.patientId);
        localStorage.setItem('emailUser', this.loginOk.emailPaciente);
        localStorage.setItem('authorization', this.loginOk.authorization);
        localStorage.setItem('role', this.loginOk.role);
        localStorage.setItem('patientName', this.loginOk.patientName);

        this.events.publish('user:logged', 'logged');
        if(this.hora ){
          // console.log(this.hora, this.doctor, this.available);
          this.navCtrl.setRoot(FinancerPage, {
            doctor: this.doctor,
            available: this.available,
            hora: this.hora
          })

        }else{
            this.navCtrl.setRoot(HomePage)
        }
        console.log("pasó!!!");
     });
    });
  }

  sendCode(){
    let email = {email:this.datos.email}
      this.crudPvr.validateEmail(email).subscribe(data=>{
          this.code = data;
          console.log('lo que me llega del vaildate:', this.code)
      });
  }

}
