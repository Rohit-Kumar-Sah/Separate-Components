import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() formdata = new EventEmitter<{amount,description}>();
  constructor() { }

  ngOnInit(): void {
    
  }

  data : {}[] 

  submit(f)
  {
    this.formdata.emit({amount:f.value.Amount,description:f.value.Description})
  }

}
