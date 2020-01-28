import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormControl } from'@angular/forms';
import { User } from './addStudent22.interface';


function iRange(min:number, max:number):ValidatorFn {
  return (c:AbstractControl): { [key:string]:boolean } |null=> {
    
    let b=Number(c.value);
    console.log(typeof(b));
    console.log(b);
  if (b!==0 && ( isNaN(b) || b<min || b>max)) {
    console.log("hey");
  return { iange : true };
   }
   
  return null;
   };
  }


  @Component({
    selector: 'app-add-student2',
    templateUrl: './add-student2.component.html',
    styleUrls: ['./add-student2.component.css']
  })
export class AddStudent2Component implements OnInit {

  user: FormGroup;
  constructor(private fb:FormBuilder) {}
  ngOnInit() {
    this.user = this.fb.group({
      name: new FormControl('nishtha', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
        
      }),
      age: new FormControl('',[Validators.required,iRange(21,55)]),sendCatalog:true
    })
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
  

}
