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
  private recipe;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public navParams: NavParams,
              public appointmentProvider: AppointmentProvider,
              public dependentsProvider: DependentsProvider,
              public recipePvr: RecipesProvider) {
          this.appointmentProvider.getAppointmentsPeruser().subscribe(data =>{
            this.citas = 'miscitas';
            this.tasks = data;
            this.mostrar = this.tasks.length;
            console.log('mis citas:',this.tasks);
            // console.log('tasks:', this.tasks);
          },
          err =>{
            console.error('algo fallo')
          });

          this.dependentsProvider.getOldDependetsDay().subscribe((data:any)=>{
              this.citaspasadas = data;
              this.sinpasadas = this.citaspasadas.length;
              console.log('citas pasadas:', this.citaspasadas);
          })

        this.dependentsProvider.getdependesDay().subscribe((data:any)=>{
          this.tasksParents = data;
          this.sinParents = this.tasksParents.length;
          console.log('las citas de los familiares:', this.tasksParents);
        });
  }
  gotoDetails(task){
    this.navCtrl.push(MyDateModalPage, { task:task , tasks: this.tasks});
  }
  goToRecipe(citaspa){
    let id = citaspa.encuentro_pk;
    this.recipePvr.getRecipes(id).subscribe((data:any)=>{
        this.recipe = data;
        this.navCtrl.push (RecipePage, {recipe: this.recipe})
    });
  }
}
