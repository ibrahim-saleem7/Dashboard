import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isReSize :boolean = true

  @Input() isSize! :boolean ;
  @Output() newItemEvent  = new EventEmitter<boolean>();
  constructor(){}



  sendVaule(value :boolean){
    value = this.isSize
    this.newItemEvent.emit(value)
  }

}
