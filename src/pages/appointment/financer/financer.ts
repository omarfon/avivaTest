import { PayuPage } from './../../payu/payu';
import { HomePage } from './../../home/home';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, NavController, NavParams, Platform, ModalController, ViewController, ActionSheetController } from 'ionic-angular';
import { CardPage } from '../../card/card';

import { FinancierProvider } from './../../../providers/financier/financier';

import { MasterDetailPage } from './../../../pages/appointment/master-detail/master-detail';
import { LoginPage } from '../../user/login/login';
import { DatosPage } from '../../datos/datos';
import { AppointmentProvider } from '../../../providers/appoinment/appoinment';
import { throwToolbarMixedModesError } from '@angular/material';
import { PayPage } from '../pay/pay';



@Component({
  selector: 'page-financer',
  templateUrl: 'financer.html',
})
export class FinancerPage {
  public items: Object[]
  public price;
  isAndroid: boolean = false;

  private doctor; //doctor seleccionado//
  private available; //fecha seleccionada//
  private hora; // fecha seleccionada

  nots = [
    { "id": "1", "name": "En local" },
    { "id": "2", "name": "Con tarjeta" },
  ];

  questions = [
    { "id": 1, "name": "Si tengo" },
    { "id": 2, "name": "No tengo" },
  ];

  myEnsuranceName: string;
  firtClick: boolean = false;
  isInsurance: boolean = false;
  isInsuranceName: boolean = false;
  isCard: boolean = false;
  name: any;
  card: number;
  isPlace: boolean = false;
  payment: boolean = false;
  secure: boolean;
  nameSecure: String;
  financier_id: string;
  paymentName: String;
  appointment: any;
  user_id;
  paymentType: string;
  open: boolean = false;

  myForm: FormGroup;
  pase;
  private hour;
  private subida;
  pay;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public financierProvider: FinancierProvider,
    public modalCtrl: ModalController,
    public appointmentProvider: AppointmentProvider,
    public actionSheet: ActionSheetController,
    public viewCtrl: ViewController) {

    this.isAndroid = platform.is('android');


    this.financierProvider.getFinanciers().subscribe(data => { this.items = data; this.items.shift(); });

    this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available');
    this.hora = this.navParams.get('hora');
    console.log(this.hora, )
    this.subida = this.hora.listjson;

    let role = localStorage.getItem('role');

    if (role === 'guest') {
      //  console.log('no hay mail');
      let datos = this.navCtrl.push(DatosPage,
        {
          hora: this.hora,
          doctor: this.doctor,
          available: this.available
        });
      // console.log('datos de financer:', this.hora, this.doctor , this.available)
      // datos.present();

    } else {
      console.log("si hay constraseña. que pase");
    }

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      card: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]]
    }, { validator: this.dateValid('month', 'year') });

    Culqi.publicKey = 'pk_test_e85SD7RVrWlW0u7z';

  }


  evaluateEnsurance() {
    this.firtClick = !this.firtClick;
    this.isInsurance = false;
    this.isInsuranceName = true;
    this.payment = false;
    this.isPlace = false;
    this.isCard = false;
  }

  validateSelected(item) {
    if (item == 1) {
      this.firtClick = false;
      this.isInsurance = true;
      this.secure = true;
      this.open = true;
    } else if (item == 2) {
      // PARTICULAR
      this.financierProvider.getPrice(1, this.doctor.service.id, this.doctor.service.id, this.available).subscribe(data => {
        this.price = Math.round(parseFloat(data[0].prest_precio_val) * 100 + Number.EPSILON) / 100;
        // console.log('available.date:', this.available.date);
        this.isPlace = false;
        this.isCard = false;
        this.firtClick = false;
        this.payment = true;
        this.open = true;
        this.secure = false;
        this.isInsuranceName = false;
        this.isInsurance = false;
      });
    }
  }

  insuranceSelected(item, itemName) {
    // SEGUROS
    this.financierProvider.getPrice(1, this.doctor.service.id, this.doctor.service.id, this.available).subscribe(data => {
      this.price = Math.round(parseFloat(data[0].prest_precio_val) * 100 + Number.EPSILON) / 100;
      this.myEnsuranceName = itemName;
      this.isInsuranceName = true;
      this.isInsurance = false;
      this.payment = true;
      this.nameSecure = itemName;
      this.financier_id = item;
    });
  }

  selectEnsurance() {
    this.isInsurance = !this.isInsurance;
    this.isInsuranceName = !this.isInsuranceName;
    this.myEnsuranceName = null;
  }

  personalSelected(item) {
    // console.log("Selected Item", item);
    if (item == 1) {
      this.isPlace = true;
      this.paymentName = "En local";
    } else {
      this.paymentName = "Con tarjeta";
      this.isPlace = false;
    }
  }


  dateValid(month: string, year: string) {
    return (group: FormGroup) => {
      let date = new Date();
      let monthInput = group.controls[month];
      let yearInput = group.controls[year];

      if (yearInput.value == date.getFullYear())
        if (monthInput.value < ("0" + (date.getMonth() + 1)).slice(-2))
          return monthInput.setErrors({ notEquivalent: true })
    }
  }

  openCulqi(data:any){
    let appointment = data;
  console.log("this.openCulqi");
    const settings = {
      title: 'Cita para' ,
      description: "prueba",
      currency: "PEN",
      amount: this.price * 100
    };
    culqiData.amount = this.price * 100;
    Culqi.settings(settings);


    const i = setInterval(function(){
      if(culqiData.status == "ok" ){
        clearInterval(i);
        this.navCtrl.setRoot(HomePage);
      }
      else if(culqiData.status == "error"){
        const self = this;
        clearInterval(i);
         let action = this.alertCtrl.create({
              title:"EL PAGO NO PUDO REALIZARSE",
              buttons:[
                {
                  text: "Intentar de nuevo",
                  role: 'destructive',
                  handler: ()=>{
                    action.dismiss().then(()=>{
                      culqiData.status = "";
                      self.openCulqi(data);
                    });
                    return false;
                  }
                },
                {
                  text: "Pagar en clínica",
                  handler: ()=>{
                    this.navCtrl.setRoot(HomePage);
                    let alert = this.alertCtrl.create({
                      title:"La Cita que pediste ha sido creada",
                      subTitle:"recuerda que tendras que pagar en la clínica",
                      buttons:[{
                        text:"OK",
                        role:'cancel'
                      }]
                      
                    });
                  }
                },
                {
                  text: "Cancelar cita",
                  handler: ()=>{
                    this.appointmentProvider.destroyAppointment(appointment).subscribe(data =>{
                      let alert = this.alertCtrl.create({
                          title:"su cita fue cancelada",
                      })
                      alert.present();
                    });
                    this.navCtrl.setRoot(HomePage);
                  }
                }
              ]
         });
         action.present();
       }
    }.bind(this),
  1000);
  console.log("open CUlqi");
  Culqi.open();
  }

  payCulqi() {

    this.appointmentProvider.createAppointment(this.subida)
                            .subscribe((data:any)=> 
                            this.openCulqi(data)
    ,err =>{
      console.log('err',err);
           if(!err){
             return
          }
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
          case 15035:
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
              ],
              enableBackdropDismiss: true
            });
            alert.present();
            break;

          default:
            break;
        }

    });
  }
  

  openModalPayu(){
    let payuModal = this.modalCtrl.create(PayuPage, {subida:this.subida,});
    console.log('this subida de financer:',this.subida)
    payuModal.present();
  }
}
