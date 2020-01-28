import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudent2Component } from './add-student2/add-student2.component';

const routes: Routes = [
    
        //{path: '/add-student', component: AddStudentComponent},
        {path: 'add-student2', component: AddStudent2Component},
        {path:'**', component: PagenotfoundComponent}
 
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
export const routingComponents=[AddStudentComponent, AddStudent2Component] 
    
