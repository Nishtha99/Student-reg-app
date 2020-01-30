import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudent2Component } from './add-student2/add-student2.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { JsondatapackService } from './jsondatapack.service';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
    
  {path: '', component: AddStudentComponent},
  {path: 'add-student2', redirectTo:'', pathMatch:'full'},
  {path: 'add-student', component: AddStudent2Component},
  {path: 'student-details',component: StudentDetailsComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,AddStudent2Component,AddStudentComponent,StudentDetailsComponent, PagenotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [JsondatapackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
