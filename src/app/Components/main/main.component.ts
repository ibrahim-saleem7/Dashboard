import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  isReSize :boolean = true

  constructor( ){
  }


  reSize(){
    this.isReSize =!this.isReSize
    
  }

  resvedValue(value:any){

    this.isReSize = !value
  }


  
  
}
