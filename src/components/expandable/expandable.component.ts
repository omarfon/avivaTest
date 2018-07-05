import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.component.html'
})
export class ExpandableComponent {

@ViewChild('expandWrapper', {read: ElementRef}) expandWrapper;
@Input('expanded') expanded;
@Input('expandedlow') expandedlow;
@Input ('expandHeight') expandHeight;
@Input('doctor') doctor;
@Input ('available') available;
@Input('horas') horas;

      constructor(public renderer: Renderer){}


currentHeight: number = 0;

ngAfterViewInit(){
  this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
}

}
