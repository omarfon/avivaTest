import { DatosPage } from './../datos/datos';
import { MyDateModalPage } from './../optionals-devs/my-dates/my-date-modal/my-date-modal';
import { RegisterPage } from './../user/register/register';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FinancerPage } from '../appointment/financer/financer';



import * as moment from 'moment';
import { ExpandableComponent } from '../../components/expandable/expandable.component';

import { HelloProvider } from '../../providers/hello/hello';


@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
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
  itemExpandHeight: number = 200;
  changueColor: Boolean = false;
 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public helloPvr: HelloProvider,
              public elementRef: ElementRef,
              public render: Renderer2,
              public viewCtrl: ViewController

       
){
  this.id=1;
  this.fromDate = moment().format("YYYY-MM-DD");
  this.toDate = moment().add(this.numDays,"day").format("YYYY-MM-DD");

  this.helloPvr.getServicios().subscribe ( servicios =>{
    this.servicios = servicios;
   
  });

  this.getDoctorsList();
}

getDoctorsList(){
  this.helloPvr.getDoctorsPerId(this.id).subscribe( doctores =>{
    this._doctors = doctores.map(doctor => {
      doctor.hasAvailable = true;
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
  doctor.expanded = !doctor.expanded;
  if(doctor.expanded){
    doctor.expanded
  }
  this.horas = available.hours;
  this.dia = available.date;

  
}
goToFinancer(doctor, available, hora){
  let role = localStorage.getItem('role');

  if(  role === 'guest'){
       console.log('no hay mail');
       let datos = this.navCtrl.push(DatosPage, 
        {hora : hora, 
        doctor: this.doctor, 
        available: this.fromDate});
        // datos.present();

  }else{
      this.navCtrl.push(FinancerPage ,{ doctor:doctor , available:this.fromDate , hora:hora})
  }
}

  }

