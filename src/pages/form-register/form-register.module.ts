import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormRegisterPage } from './form-register';

@NgModule({
  declarations: [
    FormRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(FormRegisterPage),
  ],
})
export class FormRegisterPageModule {}
