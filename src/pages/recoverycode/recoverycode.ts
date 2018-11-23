import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Events, NavController, NavParams } from 'ionic-angular';
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
              public events: Events) {
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
        console.log('el logeo:', this.logeo);
        console.log('datos que vienen del logueo: por registro:', this.logeo);
          localStorage.setItem('idTokenUser', this.logeo.patientId);
          localStorage.setItem('emailUser', this.logeo.emailPaciente);
          localStorage.setItem('authorization', this.logeo.authorization);
          localStorage.setItem('role', this.logeo.role);
          localStorage.setItem('patientName', this.logeo.patientName);
          localStorage.setItem('image', this.logeo.photoUrl);
          this.events.publish('user:logged', 'logged');
          if(this.logeo.role == 'user'){
            this.navCtrl.setRoot(HomePage);
          }else{
            console.log('crear alert para reintentar');
          }
  });

 }


}
