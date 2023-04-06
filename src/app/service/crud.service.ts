import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  
  serviceURL : string;


  constructor( private http: HttpClient) { 
    this.serviceURL = "http://localhost:3000/todos"
  }
}
