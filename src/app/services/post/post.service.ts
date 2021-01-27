import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "http://localhost:8080/post/";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiURL + 'getAll').pipe(
      catchError(this.errorHandler)
    )
  }

  find(id: string): Observable<Post> {
    return this.httpClient.get<Post>(this.apiURL + 'getSingle/' + id).pipe(
      catchError(this.errorHandler)
    )
  }

  create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.apiURL + 'create', post).pipe(
      catchError(this.errorHandler)
    )  }  

  update(id : string, post : Post): Observable<Post> {
    return this.httpClient.put<Post>(this.apiURL + 'update/' + id, post).pipe(
      catchError(this.errorHandler)
    )  }

  delete(id: string){
    return this.httpClient.delete<Post>(this.apiURL + 'delete/' + id).pipe(
      catchError(this.errorHandler)
    )  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
