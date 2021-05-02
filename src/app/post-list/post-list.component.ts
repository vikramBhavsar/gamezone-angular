import { Component, OnInit } from '@angular/core';
import {PostListService} from '../post-list.service'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',

  template: `

  <h1>This is from inside of post list component</h1>

  <ul>
    <li *ngFor="let post of data">
      {{post.post_title}}
    </li>
  <ul>

  <p>{{data}}</p>
  `,
  styleUrls: ['./post-list.component.css'],

  providers: [PostListService]


})


export class PostListComponent implements OnInit {

  current_user : String;
  current_user_id : String;
  isLogggedIn : boolean;

  data : any;
  constructor(
    private cookieService: CookieService,
    private postListService :PostListService) { }

  ngOnInit(): void {

    this.isLogggedIn = this.cookieService.check("Current_User_Name");

    if(this.isLogggedIn){
      this.current_user = this.cookieService.get("Current_User_Name");
      this.current_user_id = this.cookieService.get("Current_User_ID")
    }

    console.log("This is the current user id: ",this.current_user);




    this.postListService.getPostList().subscribe((data:any) =>{
      this.data = data;
      console.log(data)
    });
  }

}
