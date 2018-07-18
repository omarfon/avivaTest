import { LoginPage } from './../user/login/login';
import { DatosPage } from './../datos/datos';
import { MyDateModalPage } from './../optionals-devs/my-dates/my-date-modal/my-date-modal';
import { RegisterPage } from './../user/register/register';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController, AlertController } from 'ionic-angular';
import { FinancerPage } from '../appointment/financer/financer';



import * as moment from 'moment';
import { ExpandableComponent } from '../../components/expandable/expandable.component';

import { HelloProvider } from '../../providers/hello/hello';
import { CapitalizePipe } from '../../pipes/capitalize/capitalize';



@Component({
  selector: 'page-card',
  templateUrl: 'card.html'
})
export class CardPage {
@ViewChild('MyDays') MyDays: ElementRef;


  loading: boolean;
  data: {};
  centers;
  specialtyes;
  _doctors: any = [];
  doctors: any = [];
  professionals;
  allprofessionals;
  id;
  public sede;
  public especialidad;

  specialty_id;

  search: string = '';
  formateado;

  profesionales;

  doctor:any;
  horas: any[]= [];
  available:any[];
  dia: any[];
  fromDate:string;
  toDate:string;
  numDays:number = 7;

  servicios:any[] = [];
  doctoresData:any[] = [];

  doctorData;
  itemExpanded: boolean = true;
  itemExpandHeight: number = 250;
  changueColor: Boolean = false;

  hora:any = [];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public helloPvr: HelloProvider,
              public elementRef: ElementRef,
              public render: Renderer2,
              public viewCtrl: ViewController,
              public alertContrl: AlertController
){
  this.hora = this.navParams.get('hora');
  this.doctor = this.navParams.get('doctor');
  this.available = this.navParams.get('available');

  if(this.hora ){
    this.navCtrl.push(FinancerPage, {hora:this.hora, doctor: this.doctor, available: this.available})
  }else{
      console.log("no trae data, seguir con el proceso normal");
  }
  this.id=1;
  this.fromDate = moment().format("YYYY-MM-DD");
  this.toDate = moment().add(this.numDays,"day").format("YYYY-MM-DD");

  this.helloPvr.getServicios().subscribe ( servicios =>{
    this.servicios = servicios;
    if(servicios.length > 0){
      this.getDoctorsList();
    }
    if(servicios.length == 0){
      let alert = this.alertContrl.create({
        title:'Sesión expirada',
        subTitle:'necesitas reiniciar sesión',
        buttons: [{
          text:'Ok',
          handler: ()=>{
            this.navCtrl.push(LoginPage);
          }
        }
        ]
      });
      alert.present();
    }
  });
}

getDoctorsList(){
  this.helloPvr.getDoctorsPerId(this.id).subscribe( doctores =>{
    this._doctors = doctores.map(doctor => {
      doctor.hasAvailable = true;
      doctor.expanded = false;
      this.helloPvr.getAvailablesPerDoctor(doctor.id, doctor.service.id, this.fromDate, this.toDate).subscribe(availables=>{
          if(availables.length == 0){
            doctor.hasAvailable = false;
            }
          doctor.availables = availables;
         });
      return doctor;
    });
    this.doctors = this._doctors;
    // this._doctors.date;
});
}

  onChangueSpecialty(specialty:any):void{
    this.id = specialty;
      this.getDoctorsList();
  }

  getDoctorsPerDay(){
    this.toDate = moment(this.fromDate).add(this.numDays,"day").format("YYYY-MM-DD");
    this.getDoctorsList();
  }

buscarDoctor(){
  if(this.search.length == 1){
    return
  }
  this.doctors = this._doctors;
  this.doctors = this.doctors.filter(doctor => {
    const isOk = doctor.fullName.toLowerCase().indexOf((this.search).toLowerCase()) != -1 ;
    return isOk;
  });

}


expandedItem(doctor, available){

  this.doctors.map((listDoctor) =>{
    if(doctor == listDoctor){
        listDoctor.expanded = true;
    }else{
      listDoctor.expanded = false;
    }
    return listDoctor
    });
    this.horas = available.hours;
    console.log('las horas:', this.horas);
    this.dia = available.date;
    }


goToFinancer(doctor, available, hora){
  let role = localStorage.getItem('role');
  if(  role === 'public'){
       let datos = this.navCtrl.push(LoginPage,
        {hora : hora,
        doctor: doctor,
        available: this.fromDate});
        // datos.present();
  }else {
      this.navCtrl.push(FinancerPage ,{ doctor:doctor , available:this.fromDate , hora:hora})
  }
}

  }

