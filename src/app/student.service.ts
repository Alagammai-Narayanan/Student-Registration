import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public base_url = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getAllStudents(){
    return this.http.get(this.base_url)
  }
  postStudentData(formData: any){
    return this.http.post(this.base_url, formData)
  }
  deleteStudent(id: number){
    return this.http.delete(`${this.base_url}/${id}`)
  }
  getStudentDatById(id: any){
    return this.http.get(`${this.base_url}/${id}`)
  }
  updateStudent(formData: any, id: any){
    return this.http.put(`${this.base_url}/${id}`, formData)
  }
}
