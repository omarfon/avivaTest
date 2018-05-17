import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PayuPage } from './payu';

@NgModule({
  declarations: [
    PayuPage,
  ],
  imports: [
    IonicPageModule.forChild(PayuPage),
  ],
})
export class PayuPageModule {}
