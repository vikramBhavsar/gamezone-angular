import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostListService {
  
  post_list_url = "https://gamezone-nodejs-mongo-vikram.herokuapp.com/api/"

  constructor(private http: HttpClient) {}

  getPostList(){
    return this.http.get(this.post_list_url);
  }

  getPostListOfUser(username:String){
    var post_list_by_user_url = `https://gamezone-nodejs-mongo-vikram.herokuapp.com/api/${username}`
    return this.http.get(post_list_by_user_url);
  }
}
