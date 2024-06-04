import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    EditStudentComponent,
    AddStudentComponent,
    ListStudentComponent,
    LoginComponent,
    RegistrationComponent,
    ProductListingComponent,
    FilterProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
