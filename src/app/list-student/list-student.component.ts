import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.scss'
})
export class ListStudentComponent implements OnInit {

  public studentList:any;

  constructor(private studentservice: StudentService, private router: Router){}

  ngOnInit(){
    this.studentservice.getAllStudents().subscribe((resp)=>{
      console.log('response is', resp);
      this.studentList = resp;
      console.log('studentList is', this.studentList)
    })
  }

  deleteItem(ind: any){
    //  this.studentList.splice(ind, 1)
    this.studentservice.deleteStudent(ind).subscribe((res)=>{
      this.studentList = res;
      console.log('deleted res is', res)
    })
  }
  goToEdit(id: any){
    this.router.navigate([`/edit/${id}`])
  }
}
