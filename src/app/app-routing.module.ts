import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
 {
  path: 'add',
  component: AddStudentComponent
 },
 {
  path: 'edit/:id',
  component: EditStudentComponent
 },
 {
  path: 'list',
  component: ListStudentComponent
 },
 {
  path: 'login',
  component: LoginComponent
 },
 {
  path: 'register',
  component: RegistrationComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
