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
  public _tasks;
  public ensenar;
  public nombre;
  public recipes;
  private recipendiente;
  private lastRecipe;

  public misCitas;
  public depesCitas: any;
  public dependientes;

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
    }

    obtenerUltimaFecha(){
        // citas del usuario principal
      this.appointmentProvider.getAppointmentsPeruser().subscribe(data =>{
          this.tasks = data;
          this.citapendiente = this.tasks.length;
          console.log('this.tasks:', this.tasks);
        });
            this.recipesPvr.getAllRecipes().subscribe((data:any) =>{
              this.recipes = data;
              this.recipendiente = this.recipes.length;
              console.log('this._recipes:', this.recipes);
          });
      // citas de los dependientes
      this.dependensProvider.getdependesDay().subscribe(data =>{
        this.depesCitas = data.map(depes =>{
            if(depes[0].appointments != []){
                  depes.push(this.dependientes)
            }else{

            }
        })



        // console.log('this.depesCitas:', this.depesCitas);
        // const depes = [];



      });

      // if(!this.tasks){
      //   // this.tasks = this.depesCitas[0].appointments[0];
      //   console.log('this.recipes en obtenerUltimaReceta:');
      // }else{
      //   this.tasks = this._tasks;
      // }

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
