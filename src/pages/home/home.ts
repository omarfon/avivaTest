import { RecipesProvider } from './../../providers/recipes/recipes';
import { AuthorizationPublicProvider } from '../../providers/authorization-public/authorization-public';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CardPage } from '../card/card';
import { AppointmentProvider } from '../../providers/appoinment/appoinment';
import { DependentsProvider } from '../../providers/dependents/dependents';
import 'rxjs/add/operator/map'
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
  public _tasks;
  public ensenar;
  public nombre;
  public recipes;
  private recipendiente;
  private lastRecipe;

  public misCitas;
  public depesCitas;
  public citasDepes;

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
    }

    obtenerUltimaFecha(){
        // citas del usuario principal
      this.appointmentProvider.getAppointmentsPeruser().subscribe(data =>{
          this.tasks = data;
          this.citapendiente = this.tasks.length;
          console.log('this.tasks:', this.tasks);
        });
        // llamadas en la carga las recetas mas recientes
            this.recipesPvr.getAllRecipes().subscribe((data:any) =>{
              this.recipes = data;
              this.recipendiente = this.recipes.length;
              // console.log('this._recipes:', this.recipes);
          });
      // citas de los dependientes
      this.dependensProvider.getdependesDay().subscribe(data =>{
        this.depesCitas = data;
        console.log('this.depesCitas:', this.depesCitas);
        this.depesCitas.map(depe =>{
          if(depe.appointments == 0){
            console.log('los depes que no tienen citas', depe);
          }else{
            this.citasDepes = depe.appointments[0];
            console.log('los depe con citas:', this.citasDepes);
            if( this.recipes && this.citasDepes){
                this.citapendiente = 2;
            }else{
              this.citapendiente = this.citapendiente;
            }
          }
        });
      });

        if(this.tasks > 1){
        const citasAll = {...this.tasks, ...this.depesCitas};
        console.log('todas las citas, incluidas las de principal:', citasAll);
    }else{
        const citasAll = {...this.depesCitas};
        console.log('citas solo los dependientes', citasAll);
    }

    }


  irACard(){
    this.navCtrl.push(CardPage);
        }
}
