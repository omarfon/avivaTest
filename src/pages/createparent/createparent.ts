import { CrudparentProvider } from './../../providers/crudparent/crudparent';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DependentsProvider } from '../../providers/dependents/dependents';


@Component({
  selector: 'page-createparent',
  templateUrl: 'createparent.html',
})
export class CreateparentPage {

  public formFamily: FormGroup;
  public parents;
  public _parents;
  public createParents;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fb: FormBuilder,
              public viewCtrl: ViewController,
              public dependentsPvr: DependentsProvider,
              public crudPvr: CrudparentProvider) {

          this.dependentsPvr.getDependens().subscribe(data =>{
              this.parents = data;
          })

                this.formFamily = this.fb.group({
                  name            : ['', [ Validators.required ]],
                  paternal_surname: ['', [ Validators.required ]],
                  maternal_surname: ['', [ Validators.required ]],
                  gender          : ['',[ Validators.required ]],
                  date_of_birth   : ['',[ Validators.required ]],
                  type_document   : ['', [ Validators.required ]],
                  dni             : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]],
                  // user_id         : [ localStorage.getItem('idTokenUser') ],
                  kindred         : ['',[ Validators.required ]]
                  // email           : [ String(Math.floor(Math.random() * 9e15)) + '@ipsum.com' ],
                  // password        : [ String(Math.floor(Math.random() * 9e15)) ]
                });

                console.log('la data de formulario:', this.formFamily);

  }

  closeModal(){
    this.viewCtrl.dismiss();
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
          this._parents = dat;
          console.log(this.parents);
        this.viewCtrl.dismiss(this._parents);
        });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateparentPage');
  }
}
