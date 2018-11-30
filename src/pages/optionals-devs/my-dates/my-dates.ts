import { RecipePage } from './../../recipe/recipe';
import { RecipesProvider } from './../../../providers/recipes/recipes';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController, ViewController } from 'ionic-angular';
import { AppointmentProvider } from '../../../providers/appoinment/appoinment';

import { MyDateModalPage } from './my-date-modal/my-date-modal';
import { DependentsProvider } from '../../../providers/dependents/dependents';



@Component({
  selector: 'page-my-dates',
  templateUrl: 'my-dates.html',
})
export class MyDatesPage {


  tasks: any[];
  tasksParents: any[];
  private mostrar;
  private sinpasadas;
  private sinParents;
  citas;
  private citaspasadas;
  private _citaspasadas;
  private $citaspasadas ;
  private recipe;

  public dependens;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public appointmentProvider: AppointmentProvider,
              public dependentsProvider: DependentsProvider,
              public recipePvr: RecipesProvider,
              public dependentsPvr: DependentsProvider) {

              this.dependentsPvr.getDependens().subscribe(data =>{
                  this.dependens = data;
              console.log('los dependientes:', this.dependens);
                });

          this.appointmentProvider.getAppointmentsPeruser().subscribe(data =>{
            this.citas = 'miscitas';
            this.tasks = data;
            this.mostrar = this.tasks.length;
            // console.log('mis citas:',this.tasks);
            // console.log('tasks:', this.tasks);
          },
          err =>{
            console.error('algo fallo')
          });

          this.dependentsProvider.getOldDependetsDay().subscribe((data:any)=>{
              this.citaspasadas = data;
              this.sinpasadas = this.citaspasadas.length;
              console.log('citas pasadas:', this.citaspasadas);
          });

        this.dependentsProvider.getdependesDay().subscribe((data:any)=>{
          this.tasksParents = data;
          this.sinParents = this.tasksParents.length;
          console.log('las citas de los familiares:', this.tasksParents);
        });
  }
  gotoDetails(taskpa){
      this.navCtrl.push(MyDateModalPage, { taskpa:taskpa});
      console.log('taskpa:', taskpa);
  }

  goToDetailsTask(task){
    console.log('task datos:', task);
    this.navCtrl.push(MyDateModalPage, {task:task});
  }

  goToRecipe(citaspa){
    let id = citaspa.encuentro_pk;
    this.recipePvr.getRecipes(id).subscribe((data:any)=>{
        this.recipe = data;
        this.navCtrl.push (RecipePage, {recipe: this.recipe})
    });
  }

  getDatesUser(){
      // traer nuevamente las citas de el usuario pincipal y renderizarlas
      this.dependentsProvider.getOldDependetsDay().subscribe((data:any)=>{
        this._citaspasadas = data;
        this.citaspasadas = this._citaspasadas;
        this.sinpasadas = this.citaspasadas.length;
        console.log('citas pasadas:', this.citaspasadas);
    });
  }

  getDatesDepends(dep){
    const id = dep.patientId;
    this.dependentsProvider.getDependentDay(id).subscribe(data =>{
      this.$citaspasadas = data;
      console.log('citas de dependientes jalada:', this.$citaspasadas);
      this.citaspasadas = this.$citaspasadas[0].encuentros;
    })
    // console.log('conseguir los datos del los dependientes', this.citaspasadas);
  }
}
