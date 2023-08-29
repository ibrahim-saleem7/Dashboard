import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  isSettingOff : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setting(){
    this.isSettingOff = !this.isSettingOff
  }

}














