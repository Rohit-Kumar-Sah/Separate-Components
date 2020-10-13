import { Output } from '@angular/core';
import { DoCheck, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MyService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  insert :  {amount,description}[]=[]
  constructor(private myservive : MyService) { }
ngOnInit(){
   this.insert= this.myservive.getData()
  console.log("from table",this.insert)
}
  
  myDate = Date.now();
  deleteme(i){
    this.insert.splice(i,1)
  }  
  
}
