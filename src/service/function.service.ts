import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FormData_Mail from '../Models/FormData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private http:HttpClient) { }
   send_Mail(data:FormData_Mail):Observable<any> {
    return this.http.post("https://site-server-1g03.onrender.com/api/Function", data);
  }
  
}
