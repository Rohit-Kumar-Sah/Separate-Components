import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyService } from './data.service';




const routes : Routes = [
  // {path : '' , component : AppComponent },
  {path : 'table' , component : TableComponent },
  {path : 'form' , component : FormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [FormsModule,
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
