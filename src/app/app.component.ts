import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newComponent';
  data: { amount: any, description: any }[] 
  received: any

  receive(event: { amount: any; description: any; }) {
    this.received = event;
    if (this.data) {
      
       this.data.push({ amount: event.amount, description: event.description });
    }
    else {
      this.data = [{ amount: event.amount, description: event.description }];
    }
  }
  
}
