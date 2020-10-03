import { Output } from '@angular/core';
import { DoCheck, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements DoCheck {

  @Input() insert :  {amount,description}[];
  constructor() { }

  ngDoCheck(): void {
   
  }
  myDate = Date.now();
  deleteme(i){
    this.insert.splice(i,1)
  }  
  
}
