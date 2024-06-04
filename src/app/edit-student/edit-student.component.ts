import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {
  editForm: FormGroup;
  constructor(private studentservice: StudentService, private activatedroute: ActivatedRoute) {
    this.editForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    })
  }

  ngOnInit(): void {
    console.log('snapshot id', this.activatedroute.snapshot.params?.['id'])
    this.studentservice.getStudentDatById(this.activatedroute.snapshot.params?.['id']).subscribe((result: any) => {
      // console.log('res is', result);
      this.editForm = new FormGroup({
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
      })
    })
  }

  updateStudent() {
    console.log(this.editForm.value);
    this.studentservice.updateStudent(this.activatedroute.snapshot.params?.['id'],this.editForm.value).subscribe((res)=>{
      console.log('updated result is', res);

    })
  }
}
