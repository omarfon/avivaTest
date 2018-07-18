import { AppointmentProvider } from './../../../../providers/appoinment/appoinment';
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ViewController, ToastController, AlertController, ModalController } from 'ionic-angular';
import { MyDatesPage } from '../my-dates';
import { HomePage } from '../../../home/home';



@Component({
  selector: 'page-my-date-modal',
  templateUrl: 'my-date-modal.html',
})
export class MyDateModalPage {

  private task;
  private tasks;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController,
              public appointmentProvider: AppointmentProvider,
              public modalCtrl: ModalController) {

        this.tasks = navParams.get('taskpa');
        this.task = this.tasks.appointments[0];
        console.log('task de modalPage:' ,this.task);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  desactivateTask(task){

    let confirm = this.alertCtrl.create({
      title: 'ANULAR CITA',
      message: '¿Estas seguro que quieres eliminar esta cita?',
      buttons: [
        {
          text: 'SI',
          handler: data => {
            this.appointmentProvider.destroyAppointment(task).subscribe( data => {
              this.navCtrl.push(MyDatesPage);
            });
          }
        },
        {
          text: 'NO',
          handler: () => {
            return true;
          }
        }
      ],
      enableBackdropDismiss: true
    });
    confirm.present();
  }

}
