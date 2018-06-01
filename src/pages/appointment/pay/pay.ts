import { HomePage } from './../../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform, ModalController, ViewController, ActionSheetController, LoadingController } from 'ionic-angular';
import { AppointmentProvider } from '../../../providers/appoinment/appoinment';
import { CardPage } from '../../card/card';


@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  myForm: FormGroup;
  currentAppointment = null;
  private subida;
  private hour;
  public price;
  public pago;

  nots = [
    { "id": "1", "name": "En local" },
    { "id": "2", "name": "Con tarjeta" },
  ];


  private doctor; //doctor seleccionado//
  private available; //fecha seleccionada//
  private hora; // fecha seleccionada


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fb:FormBuilder,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public appointmentProvider: AppointmentProvider,
              public actionSheet: ActionSheetController,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController) {

      this.pago = 'enLocal';

    this.doctor = this.navParams.get('doctor');
    this.available = this.navParams.get('available');
    this.hora = this.navParams.get('hora');
    this.subida = this.hora.listjson;


    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      card: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]]
    }, { validator: this.dateValid('month', 'year') });

    Culqi.publicKey = 'pk_test_e85SD7RVrWlW0u7z';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayPage');
  }

  // personalSelected(item) {
  //   // console.log("Selected Item", item);
  //   if (item == 1) {
  //     this.isPlace = true;
  //     this.paymentName = "En local";
  //   } else {
  //     this.paymentName = "Con tarjeta";
  //     this.isPlace = false;
  //   }
  // }


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

  openCulqi(){

    let appointment = this.currentAppointment;
    console.log("this.openCulqi");
    const settings = {
      title: 'Cita para' ,
      description: "prueba",
      currency: "PEN",
      amount: this.price * 100
    };
    culqiData.amount = this.price * 100;
    Culqi.settings(settings);

    let loadingPago = this.loadingCtrl.create({
      content:"Haciendo el cobro...",
      });
    loadingPago.present();

    const i = setInterval(function(){
      // si se puede realizar el pago con culqi
      if(culqiData.status == "ok" ){
        clearInterval(i);
        loadingPago.dismiss();
        let alert = this.alertCtrl.create({
            title:"Creación de cita",
            subTitle:"la cita que reservaste ha sido creada satisfactoriamente.",
            buttons:[
              {
                text:"OK",
                role:'cancel'
              }
            ]
        });
        alert.present();
        this.navCtrl.setRoot(HomePage);
      }
      // si no se puede realizar el pago con culqi
      else if(culqiData.status == "error"){
        const self = this;
        clearInterval(i);
        loadingPago.dismiss();
         let action = this.actionSheet.create({
              title:"EL PAGO NO PUDO REALIZARSE",
              buttons:[
                {
                  text: "Intentar de nuevo",
                  role: 'destructive',
                  handler: ()=>{
                    action.dismiss().then(()=>{
                      culqiData.status = "";
                      self.openCulqi();
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
                    alert.present();
                  }
                },
                {
                  text: "Cancelar cita",
                  handler: ()=>{
                    this.appointmentProvider.destroyAppointment(appointment).subscribe(data =>{
                      this.navCtrl.setRoot(HomePage);
                      let alert = this.alertCtrl.create({
                          title:"su cita fue cancelada",
                          buttons:[
                            {
                              text:"OK",
                              role:"cancel"
                            }
                          ]
                      });
                      alert.present();
                    });
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
  loadingPago.dismiss();
  }

  payCulqi() {

    this.appointmentProvider.createAppointment(this.subida)
                            .subscribe((data:any)=> {
                            this.currentAppointment = data;
                            this.openCulqi();
                          }
    ,err =>{
      if(this.currentAppointment !== null){
        this.openCulqi();
        return;
      }
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


  next(){
    if(this.currentAppointment === null){

      this.appointmentProvider.createAppointment(this.subida).subscribe(data=>{
          console.log("se ha creado la cita");
          let loading = this.loadingCtrl.create({
              content:"creando cita"
          });
          loading.present();
          let alert = this.alertCtrl.create({
            title:"Creación de cita",
            subTitle:"la cita que reservaste ha sido creada satisfactoriamente.",
            buttons:[
              {
                text:"Ok",
                role:"Cancel"
              }
            ]
          });
          loading.dismiss();
          alert.present();
          this.navCtrl.setRoot(HomePage);
      });
    }else{
      let alert = this.alertCtrl.create({
        title:"Creación de cita",
        subTitle:"la cita que reservaste ha sido creada satisfactoriamente.",
        buttons:[
          {
            text:"Ok",
            role:"Cancel"
          }
        ]
      });
      alert.present();
    }
    this.navCtrl.setRoot(HomePage);
  }
}
