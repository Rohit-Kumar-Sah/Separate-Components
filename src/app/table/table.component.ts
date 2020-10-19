import { AfterContentInit, AfterViewInit, Output } from '@angular/core';
import { DoCheck, EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  show: boolean = true;
  insert: { amount, description, date: { day, month, year } }[]

  constructor(private myservive: MyService, private myroute: Router) { }
  ngOnInit(): void {
    this.insert = this.myservive.getData()
    this.show = false;

    if (!this.insert) { this.show = false }
    else { this.show = true }
    setTimeout(() => {
      if (this.insert) {

        alert("Click on a Row to Edit it !")
      }
    }, 500);

  }
  ngDoCheck(): void {
    if (this.insert.length==0) { this.show = false }
    else { this.show = true }
  }
  myDate = Date.now();
  deleteme(i: number): void {
    this.insert.splice(i, 1)
  }
  LoadRow(i: string): void {
    this.myroute.navigate(['/form', i]);

  }
}
