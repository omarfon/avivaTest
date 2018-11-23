import { RecipesProvider } from './../../providers/recipes/recipes';
import { AuthorizationPublicProvider } from '../../providers/authorization-public/authorization-public';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CardPage } from '../card/card';
import { AppointmentProvider } from '../../providers/appoinment/appoinment';
import { DependentsProvider } from '../../providers/dependents/dependents';

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
  private citapendiente;
  private lastAppointment;

  public tasks;
  public ensenar;
  public nombre;
  public recipes;
  private recipendiente;
  private lastRecipe;

  public misCitas;
  public depesCitas;

  constructor(public navCtrl : NavController,
    private autho : AuthorizationPublicProvider,
    private alertCtrl: AlertController,
    private recipesPvr: RecipesProvider,
    public appointmentProvider : AppointmentProvider,
    public dependensProvider: DependentsProvider
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
      if(data.role == 'user'){
        this.obtenerUltimaFecha()
      }
    },(err:any)=>{
      let alert = this.alertCtrl.create({
        title:'Problema con el servidor',
        subTitle:'actualmente hay un problema con el servidor prueba en unos minutos.',
        buttons: [
          {
          text:'Ok',
          role:'Cancel'
        }
      ]
      })
      alert.present();
    });
  }else{
    let rol = localStorage.getItem("role");
    if(rol && rol == 'user' ){
        this.obtenerUltimaFecha()
      }
  }

  // traer las citas del usuario principal y de sus dependientes
      // citas usuario:
      this.appointmentProvider.getAppointmentsPeruser().subscribe(data=>{
          this.misCitas = data;
          console.log('this.misCitas', this.misCitas);
      });
      // mis citas:
      this.dependensProvider.getdependesDay().subscribe(data =>{
        this.depesCitas = data;
        console.log('this.depesCitas:', this.depesCitas);
      });

      const citasMiasPendientes = this.misCitas ;
      const citasDepends = { ...this.depesCitas };
      const todasLasCitas = {...citasMiasPendientes, ...citasDepends};
      console.log('todasLasCitas:', todasLasCitas);

    }

    obtenerUltimaFecha(){
        this.appointmentProvider.getAppointmentsPeruser().subscribe(data =>{
          this.tasks = data;
          this.citapendiente = this.tasks.length;

          this.recipesPvr.getAllRecipes().subscribe((data:any) =>{
            this.recipes = data;
            this.recipendiente = this.recipes.length;
            console.log('recipes:', this.recipes);
            console.log(this.recipendiente);
        });
      });
    }





  irACard(){
this.navCtrl.push(CardPage);
  }
}
