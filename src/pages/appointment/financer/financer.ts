// import { PayuPage } from './../../payu/payu';
import { HomePage } from './../../home/home';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, NavController, NavParams, Platform, ModalController, ViewController, ActionSheetController, LoadingController } from 'ionic-angular';
import { CardPage } from '../../card/card';

import { FinancierProvider } from './../../../providers/financier/financier';

import { MasterDetailPage } from './../../../pages/appointment/master-detail/master-detail';
import { LoginPage } from '../../user/login/login';
import { DatosPage } from '../../datos/datos';
import { AppointmentProvider } from '../../../providers/appoinment/appoinment';
import { throwToolbarMixedModesError } from '@angular/material';
import { PayPage } from '../pay/pay';
import { CreateparentPage } from './../../createparent/createparent';
import { PayuPage } from '../../payu/payu';
import { DependentsProvider } from '../../../providers/dependents/dependents';



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
  currentAppointment = null;
  personOk: boolean = false;
  addFamily: boolean = false;
  secureOk: boolean = false;
  depe;
  public parents;
  vcolor = false;
  ccolor = false;
  yes = false;
  no = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public fb: FormBuilder,
    public alertCtrl: AlertController,
    public financierProvider: FinancierProvider,
    public modalCtrl: ModalController,
    public appointmentProvider: AppointmentProvider,
    public actionSheet: ActionSheetController,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public dependentsPvr: DependentsProvider) {

    this.isAndroid = platform.is('android');

    this.dependentsPvr.getDependens().subscribe(data =>{
      this.parents.map(parent =>{

      })

      console.log(this.parents);
    });
    this.financierProvider.getFinanciers().subscribe(data => { this.items = data; this.items.shift(); });
    this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available');
    console.log(this.available);
    this.hora = this.navParams.get('hora');
    // this.subida = this.hora.listjson;

    let role = localStorage.getItem('role');

    if (role == 'guest') {
      //  console.log('no hay mail');
      let datos = this.navCtrl.push(LoginPage,
        {
          hora: this.hora,
          doctor: this.doctor,
          available: this.available
        });
      // datos.present();
    } else {
      console.log("si hay constraseña. que pase");
    }

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
      this.yes = true;
      this.no = false;
    } else if (item == 2) {
      // PARTICULAR
      this.financierProvider.getPrice(1, this.doctor.service.id, this.doctor.service.id, this.available).subscribe(data => {
        this.price = Math.round(parseFloat(data[0].prest_precio_val) * 100 + Number.EPSILON) / 100;
        this.isPlace = false;
        this.isCard = false;
        this.firtClick = false;
        this.payment = true;
        this.open = true;
        this.secure = false;
        this.isInsuranceName = false;
        this.isInsurance = false;
        this.no = true;
        this.yes = false;
      });
      this.secureOk = true;
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
    this.secureOk = true;

  }

  selectEnsurance() {
    this.isInsurance = !this.isInsurance;
    this.isInsuranceName = !this.isInsuranceName;
    this.myEnsuranceName = null;

  }

  // si la cita es para el usuario pasará mostrando la ventana de financiador
  passFinancer(depe){
  this.personOk = !this.personOk;
  this.personOk = true;
  this.addFamily = false;
  this.depe = depe;
  this.vcolor = true;
  this.ccolor = false;
  this.price = null;
  }

  // mostrar los familiares adjuntos o la opción de crear uno nuevo
  openParents(){
    this.addFamily = true;
    this.personOk = false;
    this.ccolor = true;
    this.vcolor = false;
  }

  passFinancerParent(depe){
    this.addFamily = false;
    this.personOk = true;
    this.depe = depe;
    this.vcolor = false;
    this.ccolor = true;
  }

  cleanDepe(){
    this.secureOk = false;
    this.depe = {};
    this.openParents()
    // console.log(this.depe);
    // this.personOk = false;
    // this.vcolor = false;
    // this.ccolor = false;
  }
  // mostrar el modal de la creación de familiares
  showDetailCreateParents(){
      this.navCtrl.push(CreateparentPage);
      // modal.present();
      // modal.onDidDismiss(data =>{
      //  this.parents = data;
      // });
  }

  // función para ir a pagos
  goToPay(){
    this.navCtrl.push(PayPage,{
      doctor:this.doctor,
      available: this.available,
      hora: this.hora,
      depe: this.depe,
      price: this.price
  });
  console.log('el precio', this.price);
  }


  openModalPayu(){
    let payuModal = this.modalCtrl.create(PayuPage, {subida:this.subida,});
    console.log('this subida de financer:',this.subida)
    payuModal.present();
  }

  doSubmitData(){
    let data = this.parents
    this.viewCtrl.dismiss(data);
    console.log('la data pasado por el modal:',data);
  }
}
