import { CardPage } from './../../card/card';
import { HomePage } from './../../home/home';
import { AlertController, NavController, NavParams, ViewController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

import { AppointmentProvider } from './../../../providers/appoinment/appoinment';
import { FinancerPage } from '../financer/financer';


@Component({
  selector: 'page-master-detail',
  templateUrl: 'master-detail.html',
})
export class MasterDetailPage {

  @ViewChild('contenido') menu: NavController;
  status: boolean;
  appointment: any;
  /*headquarter: string;
  headquarter_id:number;
  specialties: string;
  specialties_id: number;
  doctors: string;
  doctors_id:number;
  date;
  time;*/
  secure: boolean;
  nameInsurance: string;
  insurance: string;
  paymentType: string;
  payment: string; //place or card
  name: string;
  isCard: boolean;
  numberCard: number;
  numMasCard: string;
  monthCard: number;
  yearCard: number;
  ccvCard: number;
  price: string;
  alert: boolean;
  user_id: number;
  date: string;
  hora: any;
  subida: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public appointmentProvider: AppointmentProvider,
    public viewCtrl: ViewController) {
    this.appointment = this.navParams.get('appointment');
    this.date = this.navParams.get('date');
    console.log('lo que me trae date:', this.date)
    this.hora = this.navParams.get('hora');
    this.subida = this.hora.listjson;
    // console.log('lo que me trae appointment:', this.appointment);
    // console.log('subida:',this.subida);
    // console.log('lo que me trae date:',this.date);
    // console.log('lo que me trae hora:',this.hora);
    // this.status = this.navParams.get('status');
    // this.appointment = this.navParams.get('appointment');
    // this.secure = this.navParams.get('secure');
    this.nameInsurance = this.navParams.get('nameInsurance');
    // this.insurance = this.navParams.get('insurance');
    this.payment = this.navParams.get('paymentName');
    this.paymentType = this.navParams.get('paymentType');
    this.name = this.navParams.get('name');
    this.isCard = this.navParams.get('isCard');
    // this.user_id = this.navParams.get('user_id');
    this.numberCard = this.navParams.get('numberCard');
    // this.monthCard = this.navParams.get('monthCard');
    // this.yearCard = this.navParams.get('yearCard');
    // this.ccvCard = this.navParams.get('ccvCard');
    this.price = this.navParams.get('price');

    var num = "" + this.numberCard;
    this.numMasCard = num.substr(0, 4) + " **** **** " + num.substr(12, 15);
  }

  ionViewDidLoad() { }

  gotosave() {
    console.log('gotosave');
    this.appointmentProvider.createAppointment(this.subida).subscribe((data: any) => {
      console.log('data de masterDetail:', data);
      this.navCtrl.setRoot(HomePage);
      let alert = this.alertCtrl.create({
        title: 'Cita creada',
        subTitle: 'Su cita se ha creado satisfactoriamente',
        buttons: [
          {
            text: 'Ok',
            handler: data => {
            }
          }
        ]
      });
      alert.present();
    },
      err => {
        console.log('error de masterDetail:', err);
        const code = err.error.data.errorCode;
        let alert;
        switch (code) {
          case 15006:
            // case 15035:
            alert = this.alertCtrl.create({
              title: 'Aviso al Cliente',
              subTitle: 'Ya tienes una cita en una hora cercana a esta.',
              buttons: [
                {
                  text: 'Buscar otra hora',
                  handler: data => {
                    this.navCtrl.setRoot(CardPage);
                  }
                }
              ]
            });
            alert.present();
            break;

          case 15009:
            alert = this.alertCtrl.create({
              title: 'Aviso al Cliente',
              subTitle: 'El horario escogido ya fue tomado .',
              buttons: [
                {
                  text: 'Buscar otra hora',
                  handler: data => {
                    this.navCtrl.setRoot(CardPage);
                  }
                }
              ]
            });
            alert.present();
            break;

          default:
            break;
        }

      }
    );
  }

}
