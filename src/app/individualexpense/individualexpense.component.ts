import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyService } from '../data.service';

@Component({
  selector: 'app-individualexpense',
  templateUrl: './individualexpense.component.html',
  styleUrls: ['./individualexpense.component.css']
})
export class IndividualexpenseComponent implements OnInit {

  constructor(private currentroute : ActivatedRoute, private myservice : MyService) { }
itemNumber
item  : {amount,description,date:{day,month,year}} 
  ngOnInit(): void {

    this.itemNumber= this.currentroute.snapshot.params.id;
    this.item=this.myservice.getData()[this.itemNumber]
  }
  show= true;
  edit()
  {
    this.show=false;
  }

  @ViewChild ('amount') amount : ElementRef;
@ViewChild('description') description : ElementRef;
  save(){
    this.myservice.update(this.itemNumber,this.amount.nativeElement.value ,this.description.nativeElement.value)

    this.show=true
  }

}



