import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MyService } from '../data.service';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  btnclick: boolean = false
  myday: number = new Date().getDate();
  mymonth: number = new Date().getMonth() + 1;
  myyear: number = new Date().getFullYear();

  constructor(private myservice: MyService) { }
  Expense = new FormGroup({
    Amount: new FormControl(null, [Validators.required, Validators.pattern('^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$')]),
    Description: new FormControl(null, [Validators.required])

  })
  ngOnInit(): void { }

  submit(): void {
    this.btnclick = true
    setTimeout(() => {
      this.btnclick = false;
    }, 1000);
    console.log(this.Expense)
    this.myservice.setData(this.Expense.value.Amount, this.Expense.value.Description, this.myday, this.mymonth, this.myyear);
    console.log(this.myservice.getData())
    this.Expense.reset()
  }

}
