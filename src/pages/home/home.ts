import { AuthorizationPublicProvider } from '../../providers/authorization-public/authorization-public';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardPage } from '../card/card';
import { AppointmentProvider } from '../../providers/appoinment/appoinment';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  card: any = []
  cardone: any = []
  cardtwo: any = []
  cardthree: any = []
  itemExpanded: boolean = true;
  itemExpandHeight: number = 100;

  tasks: any[];
  public ensenar;
  public nombre;

  constructor(public navCtrl : NavController,
              public appointmentProvider : AppointmentProvider,
              private autho : AuthorizationPublicProvider
) {
      let nombrePatient = localStorage.getItem('patientName');
      let separador = " ";
      if(nombrePatient){
        this.nombre = nombrePatient.split(separador ,  1);
      }else{
        console.log("seguir normal es invitado")
      }
      const authorization = localStorage.getItem('authorization');
      if( !authorization ){
        this.autho.getKey().subscribe((data:any) =>{
          localStorage.setItem('authorization', data.authorization);
          // localStorage.setItem('idTokenUser', data.patientId);
          localStorage.setItem('role', data.role);
        });
      }

    }

    obtenerUltimaFecha(){
        this.appointmentProvider.getAppointmentsPeruser().subscribe(data =>{
          this.tasks = data;
          this.ensenar = this.tasks.length;
          console.log('tasks en home:',this.ensenar);
      });
    }

  irACard(){
this.navCtrl.push(CardPage);
  }
}
