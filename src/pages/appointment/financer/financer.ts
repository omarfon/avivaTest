import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AlertController, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { CardPage } from '../../card/card';

import { FinancierProvider } from './../../../providers/financier/financier';
                        
import { MasterDetailPage } from './../../../pages/appointment/master-detail/master-detail'; 
import { LoginPage } from '../../user/login/login';
import { DatosPage } from '../../datos/datos';
                        
                        
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
    {"id":"1", "name":"En local"},
    {"id":"2", "name":"Con tarjeta"},
  ];

  questions = [
    {"id":1,"name":"Si tengo seguro"},
    {"id":2,"name":"No cuento con seguro"},
  ];

  myEnsuranceName :string ;
  firtClick : boolean = false;
  isInsurance : boolean = false;
  isInsuranceName : boolean = false;
  isCard:boolean = false;
  name:any;
  card:number;
  isPlace:boolean = false;
  payment : boolean = false;
  secure : boolean;
  nameSecure : String;
  financier_id: string;
  paymentName: String;
  appointment: any;
  user_id;
  paymentType: string;
  open:boolean = false;
  
  myForm: FormGroup;
  pase;
  private hour;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public platform: Platform, 
              public fb: FormBuilder, 
              public alertCtrl: AlertController, 
              public financierProvider: FinancierProvider,
              public modalCtrl: ModalController) {
    this.isAndroid = platform.is('android');
    
    
    this.financierProvider.getFinanciers().subscribe(data => { this.items = data; this.items.shift(); });
    
    this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available');
    this.hora = this.navParams.get('hora');

    let role = localStorage.getItem('role');

    if(  role === 'guest'){
         console.log('no hay mail');
         let datos = this.navCtrl.push(DatosPage, 
          {hora : this.hora, 
          doctor: this.doctor, 
          available: this.available});
          console.log('datos de financer:', this.hora, this.doctor , this.available)
          // datos.present();

    }else{
        console.log("si hay constraseña. que pase");
    }

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      card: ['', [Validators.required, Validators.minLength(16),Validators.maxLength(16)]],
      cvv: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(3)]],
      month: ['', [Validators.required]],
      year: ['',[Validators.required]]
    }, {validator: this.dateValid('month', 'year')});
  
  }
  

  evaluateEnsurance(){
    this.firtClick = !this.firtClick;
    this.isInsurance = false;
    this.isInsuranceName = true;
    this.payment = false;
    this.isPlace = false;
    this.isCard = false;
  }

  validateSelected(item) {
    if(item == 1){
      this.firtClick = false;
      this.isInsurance = true;
      this.secure = true;
      this.open = true;
    }else if(item == 2){
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

  selectEnsurance(){
    this.isInsurance = !this.isInsurance;
    this.isInsuranceName = !this.isInsuranceName;
    this.myEnsuranceName = null;
  }

  personalSelected(item) {
    // console.log("Selected Item", item);
    if(item == 1){
      this.isPlace = true;
      this.paymentName = "En local";
    }else{
      this.paymentName = "Con tarjeta";
      this.isPlace = false;
    }
  }

  next(){
    this.navCtrl.push(MasterDetailPage , {
      status : true,
      appointment: this.doctor,
      secure:this.secure,
      nameInsurance: this.financier_id,
      insurance:this.myEnsuranceName,
      payment : this.paymentName,
      paymentType:"en local",
      isCard: this.isCard,
      user_id: this.user_id,
      price:this.price,
      date: this.available,
      hora: this.hora
    });
    console.log('lo que entra en appointment:', this.doctor);
  }

  saveData(myForm){
    this.navCtrl.push(MasterDetailPage,{
      status : true,
      appointment: this.doctor,
      secure:this.secure,
      nameInsurance: this.financier_id,
      insurance:this.myEnsuranceName,
      payment : this.paymentName,
      paymentType:"con tarjeta",
      isCard : this.isCard,
      user_id: this.user_id,
      name: myForm.name,
      numberCard: myForm.card,
      monthCard: myForm.month,
      yearCard: myForm.year,
      ccvCard: myForm.ccv,
      price:this.price,
      date: this.available,
      hora: this.hora
    });
  }

  dateValid(month: string, year: string) {
    return (group: FormGroup) => {
      let date = new Date();
      let monthInput = group.controls[month];
      let yearInput = group.controls[year];

      if( yearInput.value == date.getFullYear() ) 
        if( monthInput.value < ("0" + (date.getMonth() + 1)).slice(-2) )
          return monthInput.setErrors({notEquivalent: true})
    }
  }

}
