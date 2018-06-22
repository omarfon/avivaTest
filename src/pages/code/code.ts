import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudparentProvider } from '../../providers/crudparent/crudparent';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public crudPvr: CrudparentProvider,
              public form: FormBuilder,
              public userService: UserProvider,) {

      this.hora = this.navParams.get('hora');
      this.available = this.navParams.get('available');
      this.doctor = this.navParams.get('doctor');

      this.formCode = this.form.group({
          primero : [],
          segundo : [],
          tercero : []
      });
      console.log(this.formCode.value);
      console.log(this.formCode.value.primero);

    this.datos = this.navParams.get('datos');
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
    let code = uno + dos + tres;
    // console.log(code);
    this.datos.code = code;
    // console.log('data armada:', this.datos);
    this.crudPvr.createNewUser(this.datos).subscribe(data =>{
      this.createOk = data;

      console.log('data que viene de la creación:', data);
     let email = this.createOk.data.midleware.email;
     let password = this.createOk.data.midleware.passwordHash;

     this.userService.doSignIn(email, password).subscribe(data =>{
        this.loginOk = data;

      console.log('datos que vienen del logueo: por registro:', this.loginOk);
        // localStorage.setItem('idTokenUser', data.patientId);
        // localStorage.setItem('emailUser', formulario.value.email);
        // localStorage.setItem('authorization', data.authorization);
        // localStorage.setItem('role', data.role);
        // this.events.publish('user:logged', 'logged');

     });


      if(this.hora !== undefined){
        this.navCtrl.setRoot(FinancerPage, {
          doctor: this.doctor,
          available: this.available,
          hora: this.hora
        } )
      }else{
          this.navCtrl.setRoot(HomePage)
      }
      console.log("pasó!!!");
    });
  }

  sendCode(){
    let email = this.datos.email;
      this.crudPvr.validateEmail(email).subscribe(data=>{
          this.code = data;
          console.log('data del codigo', this.code);
          this.navCtrl.push(HomePage)
      });
  }

}
