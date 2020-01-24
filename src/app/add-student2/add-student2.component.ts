import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './addStudent22.interface';

@Component({
  selector: 'app-add-student2',
  templateUrl: './add-student2.component.html',
  styleUrls: ['./add-student2.component.css']
})
export class AddStudent2Component implements OnInit {

  user: FormGroup;
  constructor() {}
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}
