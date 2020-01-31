import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormControl } from'@angular/forms';
import { User } from './addStudent22.interface';

function iRange(min:number, max:number):ValidatorFn {
  return (c:AbstractControl): { [key:string]:boolean } |null=> {
    
    let b=Number(c.value);
    
  if (b!==0 && ( isNaN(b) || b<min || b>max)) {
    
  return { iange : true };
   }
   
  return null;
   };
  }

  function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const emailControl = c.get('empid');
    const confirmControl = c.get('confirmempid');
    if (emailControl.pristine || confirmControl.pristine) {
      return null;
      }
      if (emailControl.value === confirmControl.value) {
      return null;
      }
      return { Pass: true };
      }
  @Component({
    selector: 'app-add-student2',
    templateUrl: './add-student2.component.html',
    styleUrls: ['./add-student2.component.css']
  })
export class AddStudent2Component implements OnInit {
    user: FormGroup;
    constructor(private fb:FormBuilder) {}
    errorMsg:string;
    errorPwdMsg:string;

    ngOnInit() {
    this.user = this.fb.group({
      name: new FormControl('nishtha', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)}),
      EmpidGroup: this.fb.group({
        empid: ['', [Validators.required]],
        confirmempid: ['', Validators.required],
        }, { validator: emailMatcher }),  
      
      age: new FormControl('',[Validators.required,iRange(21,55)]),sendCatalog:true
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
}





