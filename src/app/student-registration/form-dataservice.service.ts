import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDataserviceService {
  public apiURL = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  saveFormData(formData: any): Observable<any> {
    return this.http.post(this.apiURL, formData)
  }
}
