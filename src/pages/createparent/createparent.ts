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
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fb: FormBuilder,
              public viewCtrl: ViewController,
              public dependentsPvr: DependentsProvider) {

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
                  user_id         : [ localStorage.getItem('idTokenUser') ],
                  kindred         : ['',[ Validators.required ]]
                  // email           : [ String(Math.floor(Math.random() * 9e15)) + '@ipsum.com' ],
                  // password        : [ String(Math.floor(Math.random() * 9e15)) ]
                });

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  saveData(){
    let data = this.formFamily.value;
    this.viewCtrl.dismiss( data );
    console.log('data de modal:', data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateparentPage');
  }

}
