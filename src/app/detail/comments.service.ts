import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Comment} from './comment';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _http: HttpClient) { }

  publish (comment: Comment) {
    var _url = "https://gamezone-nodejs-mongo-vikram.herokuapp.com/api/put_comment";
    return this._http.post<any>(_url, comment)
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }

  getCommentsFromPost(post_object_id:String){
    var comments_url = `https://gamezone-nodejs-mongo-vikram.herokuapp.com/api/comments/${post_object_id}`
    return this._http.get(comments_url);
  }

  deleteCommentBasedOnId(comment_id:String){
    var delete_comment_link = `https://gamezone-nodejs-mongo-vikram.herokuapp.com/api/delete/comment/${comment_id}`
    return this._http.get(delete_comment_link);
  }

}
