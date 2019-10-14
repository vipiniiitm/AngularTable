import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/index";
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }


  baseUrl: string = 'https://demo9197058.mockable.io/users';


  getUsers(){
    return this.http.get(this.baseUrl);
  }

  getUserById(id: number){
    return this.http.get(this.baseUrl + id);
  }

}
