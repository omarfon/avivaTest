import { PayuTestProvider } from './../../providers/payu-test/payu-test';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { AppointmentProvider } from './../../providers/appoinment/appoinment';



@Component({
  selector: 'page-payu',
  templateUrl: 'payu.html',
})
export class PayuPage {

  myForm: FormGroup;
  public datosTarje;
  public subida;
  public doctor;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fb: FormBuilder,
              public payu: PayuTestProvider,
              public appointmanetProvider: AppointmentProvider,
              public viewCtrl: ViewController,
              public alertCtrl: AlertController) {
      this.subida = navParams.get('subida');
      this.doctor = navParams.get('doctor');
      console.log('data que viene de financer a payu:', this.subida, this.doctor);




      this.myForm = this.fb.group({
        numero: ['',[Validators.required,
                     Validators.minLength(16),
                    Validators.maxLength(16)]],
        month: ['', [Validators.required, 
                    Validators.minLength(6),
                    Validators.maxLength(6)]],
        mail: ['',[Validators.required, Validators.email]],
        cvv: ['', [Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(3)]]
      }
    );
  }

  saveData(myForm){
    let datos = myForm.value
    let numero = datos.numero;
    let cvv = datos.cvv;
    console.log('los datos:' ,datos);
    // this.payu.command(numero, cvv).subscribe(data=>{
    //   this.datosTarje = data;
    //   if(this.datosTarje.code == "SUCCESS"){
    //     this.appointmanetProvider.createAppointment(this.subida).subscribe((data: any)=>{
    //       this.viewCtrl.dismiss();
    //         this.navCtrl.setRoot(HomePage);
    //     })
    //   }
    // });

    this.appointmanetProvider.createAppointment(this.subida).subscribe((data:any)=>{
      this.payu.command(numero , cvv).subscribe(data=>{
        this.datosTarje = data;
        if(this.datosTarje.code === "SUCCESS"){
            let satisfactoria = this.alertCtrl.create({
                title:"Creación de cita",
                subTitle:"se creo su cita satisfactoriamente",
                buttons:[
                  {
                    text:"OK",
                    handler:()=>{
                      this.viewCtrl.dismiss();
                      this.navCtrl.setRoot(HomePage)
                    }
                  }
                ]
            });
          satisfactoria.present();
        }
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayuPage');
  }


}
