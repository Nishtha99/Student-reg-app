import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public email="";
  public name= "Nishtha";
  public c_action:boolean=true;
  public s_actione:boolean=false;
  constructor() { }

  ngOnInit() { 
     
  }

}
