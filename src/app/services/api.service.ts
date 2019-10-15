import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable, of} from "rxjs/index";
import { catchError, tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }


  baseUrl: string = 'https://demo9197058.mockable.io/users';


  getUsers(){
    return this.http.get(this.baseUrl);
  }

  getProduct(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError(`getProduct id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
}
  

}
