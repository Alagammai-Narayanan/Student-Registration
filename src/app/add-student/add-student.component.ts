import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  myForm: FormGroup;
  isSuscessMessage: boolean = false;

  constructor(private studentservice: StudentService) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  addStudent() {
    if (this.myForm.valid) {
      this.studentservice.postStudentData(this.myForm.value).subscribe((result)=>{
        console.log('resul is', result);
        this.isSuscessMessage = true;
        this.myForm.reset();

        setTimeout(()=>{
          this.isSuscessMessage = false;
        }, 3000)
      });
    }
  }
}
