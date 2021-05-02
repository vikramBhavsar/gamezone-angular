import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'https://gamezone-nodejs-mongo-vikram.herokuapp.com/api/open_post';
  constructor(private _http: HttpClient) { }

  enroll (post: Post) {
    return this._http.post<any>(this._url, post)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}