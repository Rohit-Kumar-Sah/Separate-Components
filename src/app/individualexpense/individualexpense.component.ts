import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyService } from '../data.service';

@Component({
  selector: 'app-individualexpense',
  templateUrl: './individualexpense.component.html',
  styleUrls: ['./individualexpense.component.css']
})
export class IndividualexpenseComponent implements OnInit {

  itemNumber:number
  show : boolean = true;
  @ViewChild ('amount') amount : ElementRef;
  @ViewChild('description') description : ElementRef;
  item  : {amount,description,date:{day,month,year}} 


  constructor(private currentroute : ActivatedRoute, private myservice : MyService) { }
  ngOnInit(): void {

    this.itemNumber= this.currentroute.snapshot.params.id;
    this.item=this.myservice.getData()[this.itemNumber]
  }
  edit() : void
  {
    this.show=false;
  }

  save() : void{
    this.myservice.update(this.itemNumber,this.amount.nativeElement.value ,this.description.nativeElement.value)

    this.show=true
  }

}



