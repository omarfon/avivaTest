import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DependentsProvider } from '../../providers/dependents/dependents';
import { CrudparentProvider } from '../../providers/crudparent/crudparent';
import * as moment from 'moment';


@Component({
  selector: 'page-myparents',
  templateUrl: 'myparents.html',
})
export class MyparentsPage {

  openForm: boolean = false;
  public dependens;
  public _dependens;

  public formFamily: FormGroup;
  public createParents;
  public parents;
  public actual;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fb: FormBuilder,
              public dependentsPvr: DependentsProvider,
              public crudPvr: CrudparentProvider,
              public alertCtrl: AlertController) {
                this.actual = moment().format('YYYY-MM-DD');

                this.dependentsPvr.getDependens().subscribe(data =>{
                 this.dependens = data;
                 console.log('los dependientes:', this.dependens);
                })

                this.formFamily = this.fb.group({
                  name            : ['', [ Validators.required ]],
                  paternal_surname: ['', [ Validators.required ]],
                  maternal_surname: ['', [ Validators.required ]],
                  gender          : ['',[ Validators.required ]],
                  date_of_birth   : ['',[ Validators.required ]],
                  type_document   : ['', [ Validators.required ]],
                  dni             : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]],
                  user_id         : [ localStorage.getItem('idTokenUser') ],
                  kindred         : ['',[ Validators.required ]]
                  // email           : [ String(Math.floor(Math.random() * 9e15)) + '@ipsum.com' ],
                  // password        : [ String(Math.floor(Math.random() * 9e15)) ]
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyparentsPage');
  }

  showForm(){
    this.openForm = !this.openForm;
    // this.openForm = true;
  }

  saveData(){
    let datos = this.formFamily.value;
    let data:any ={
        relation :{
          id : 4,
          name : datos.kindred
        },
        name : datos.name,
        surname1 : datos.paternal_surname,
        surname2 : datos.maternal_surname,
        birthdate : datos.date_of_birth,
        gender : {
          id :2,
          name: datos.gender
        },
        documentType : {
          id: 1,
          name:datos.type_document
        },
        documentNumber : datos.dni
      }


    this.crudPvr.createParent(data).subscribe(data =>{
      this.createParents = data;
        this.dependentsPvr.getDependens().subscribe(dat =>{
          this.parents = dat;
          this.dependens = this.parents;
          console.log(this.parents);
      this.openForm = false;
        });
    });
  }

  deleteParent(depe){
    console.log('lo que me trae depe', depe);
    let id = depe._id;
    let eliminado = depe.name;
    let alert = this.alertCtrl.create({
        title:`eliminar a ${eliminado}`,
        message:'si desea continuar seleccione ok, sino es el caso cancele',
        buttons: [
          {
            text: 'Ok',
            handler: () =>{
              this.dependentsPvr.deleteDepend(id).subscribe(data=>{
                this.dependentsPvr.getDependens().subscribe(dato =>{
                  this._dependens = dato;
                  this.dependens = this._dependens;
                  console.log('lo que es ahora parientes', this.dependens);
                });
              });
            }
          },
          {
            text:'Cancel',
            role: 'Cancel',
            handler: ()=>{
              console.log('se le hace dismiss al alert');
              // alert.dismiss();
            }

          }
        ]
    });
    alert.present();
  }

}
