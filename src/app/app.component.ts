import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { MyService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newComponent';
  data: { amount: any, description: any }[] 
  received: any
  totalExpense :number =0;
  constructor(private myservice : MyService){}
  ngDoCheck(){
    this.totalExpense= this.myservice.totalExpense()
  }
 
}
