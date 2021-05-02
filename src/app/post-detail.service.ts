import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {


  constructor(private http: HttpClient) { }

  getPostDetail(id:String){

    const post_list_url = `https://gamezone-nodejs-mongo-vikram.herokuapp.com/api/detail/${id}`

    console.log(`Final URL is: ${post_list_url}`);
    return this.http.get(post_list_url);
  }
}
