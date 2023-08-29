import {  Component, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor( ){
    
  }
  isReSize : boolean = false;
  
  @Output() newItemEvent  = new EventEmitter<boolean>();


  sendVaule(){

    this.newItemEvent.emit(this.isReSize)
  }
}
