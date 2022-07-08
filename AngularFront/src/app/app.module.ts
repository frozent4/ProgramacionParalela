import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//http client module
import { HttpClientModule } from '@angular/common/http';
//import forms module
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
