import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MyService } from '../data.service';
import {FormControl,FormGroup,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor( private myservice : MyService) { }
Expense = new FormGroup({
  Amount : new FormControl(null,[Validators.required,Validators.pattern('^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$')]),
  Description : new FormControl(null,[Validators.required])

})
ngOnInit(): void {
    
 }

 btnclick=false
 
  submit()
  {
    this.btnclick=true
    setTimeout(() => {
      this.btnclick=false;
    }, 1000);
    console.log(this.Expense)
    this.myservice.setData(this.Expense.value.Amount,this.Expense.value.Description)
   this.Expense.reset()
  } 

}
