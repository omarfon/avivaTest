import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyparentsPage } from './myparents';

@NgModule({
  declarations: [
    MyparentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyparentsPage),
  ],
})
export class MyparentsPageModule {}
