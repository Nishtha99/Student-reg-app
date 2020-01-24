import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports:      [
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})

export class AppComponent {
  title = 'StudentRegistration';
}
export class AppModule { }
