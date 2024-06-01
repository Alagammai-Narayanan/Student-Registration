import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormDataserviceService } from './form-dataservice.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss'
})
export class StudentRegistrationComponent {
  myForm: FormGroup;
  submitted = false;
  public res: any = [];
  registerDataArray: any = [];
  editItemNumber: number | null = null;
  isEditMode: boolean = false;

  constructor(private formdatservice: FormDataserviceService) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
      phno: new FormControl('', [Validators.required, Validators.min(10)]),
      gender: new FormControl('', [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue]),
    })
  }

  ngOnInit() {
    const storedData = localStorage.getItem('user');
    if (storedData) {
      this.registerDataArray = JSON.parse(storedData);
      // localStorage.removeItem('user');
    }
  }

  submitForm() {
    if (this.myForm.valid) {

      if(this.editItemNumber !== null){
        //update
        this.registerDataArray[this.editItemNumber] = this.myForm.value;
      }
      else{
        //add
        this.registerDataArray.push(this.myForm.value);
      }
      localStorage.setItem('user', JSON.stringify(this.registerDataArray))
      this.myForm.reset();
      this.isEditMode = false;
    }
    else {
      console.log('Form is invalid');
    }
  }

  deleteInfo(ind: number) {
    console.log(ind);
    // this.registerDataArray = this.registerDataArray.filter((item, index) => index !== ind);
    this.registerDataArray.splice(ind, 1)
    localStorage.setItem('user', this.registerDataArray)
  }

  editItem(ind: number){
    this.myForm.patchValue(this.registerDataArray[ind]);
    this.editItemNumber = ind;
    this.isEditMode = true;
  }
}
