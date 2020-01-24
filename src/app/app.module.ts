import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudent2Component } from './add-student2/add-student2.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudent2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
