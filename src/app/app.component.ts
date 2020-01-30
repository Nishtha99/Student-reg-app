import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsondatapackService } from './jsondatapack.service';
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
  public jsonData = [];
   constructor(private jsondatapack: JsondatapackService) {}
   ngOnInit() { 
    this.jsondatapack.getJsonData().subscribe((data) => {
      this.jsonData = Array.from(Object.keys(data), k=>data[k]);
     
   });
}
}
export class AppModule { }
