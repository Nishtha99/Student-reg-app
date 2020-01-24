import { Component, OnInit } from '@angular/core';
import { User } from './add-student.interface';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent implements OnInit {
    user: User = {
      name:"Nishtha",
      account: {
        email:'',
        password:''
      },
      gender:"Female"

    }

    onSubmit({ value, valid }: { value: User, valid: boolean }) {
      console.log(value, valid);
    }
  
  constructor() { }

  ngOnInit() {
  }

}