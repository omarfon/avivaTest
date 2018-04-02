import { Component, Input } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.component.html'
})
export class ExpandableComponent {

@Input('expanded') expanded;
@Input('expandedlow') expandedlow;
@Input ('expandHeight') expandHeight;
@Input('doctor') doctor;
@Input ('available') available;
@Input('horas') horas;



currentHeight: number = 0;

  constructor( public navParams: NavParams) {
  }
}
