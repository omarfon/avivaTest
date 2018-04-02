import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';
import { AppointmentProvider } from '../../../providers/appoinment/appoinment';

import { MyDateModalPage } from './my-date-modal/my-date-modal';



@Component({
  selector: 'page-my-dates',
  templateUrl: 'my-dates.html',
})
export class MyDatesPage {


  tasks: any[];
  public mostrar;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController, 
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public navParams: NavParams, 
              public appointmentProvider: AppointmentProvider) {
          this.appointmentProvider.getAppointmentsPeruser().subscribe(data =>{
            this.tasks = data;
            this.mostrar = this.tasks.length;
            console.log('mis citas:',this.tasks);

            // console.log('tasks:', this.tasks);
          },
          err =>{
            console.error('algo fallo')
          })
  }
  gotoDetails(task){
    this.navCtrl.push(MyDateModalPage, { task:task , tasks: this.tasks});
  }
}
