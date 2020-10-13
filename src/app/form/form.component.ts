import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { MyService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() formdata = new EventEmitter<{amount,description}>();
  constructor( private myservice : MyService) { }

  ngOnInit(): void {
    
  }

  data : {}[] 

  submit(f)
  {
    this.myservice.setData(f.value.Amount,f.value.Description)
    // console.log(this.myservice.getData())
    // // this.formdata.emit({amount:f.value.Amount,description:f.value.Description})
  } 

}
