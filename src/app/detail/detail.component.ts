import { Component, OnInit } from '@angular/core';
import {PostDetailService} from '../post-detail.service';
import {CommentsService} from './comments.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {Comment} from './comment'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers : [PostDetailService,CommentsService]
})
export class DetailComponent implements OnInit {

  postDetail : any;


  current_user : String;
  current_user_id : String;
  isLogggedIn : boolean;

  condition = true;

  commentData: any;

  commentModel = new Comment('','','');

  constructor(
    private commentsService: CommentsService,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private postDetailService :PostDetailService,
    ) { }

  ngOnInit(): void {

    this.isLogggedIn = this.cookieService.check("Current_User_Name");

    if(this.isLogggedIn){
      this.current_user = this.cookieService.get("Current_User_Name");
    }



    var object_id = this.route.snapshot.paramMap.get("object_id");
    this.postDetailService.getPostDetail(object_id).subscribe((data:any) =>{
      this.postDetail = data;
      console.log(data)
    });
    

    this.commentsService.getCommentsFromPost(object_id).subscribe((commentData:any) =>{
      this.commentData = commentData;


      // for adding true/false for edit or delete
      var commentCounter;
      console.log("Showing all the comments.");
      for(commentCounter =0;commentCounter< this.commentData.length;commentCounter++){
        console.log(this.commentData[commentCounter]);
        this.commentData[commentCounter]["loggedIn"] = false;

        if(this.isLogggedIn){
          if(this.commentData[commentCounter].by_user == this.current_user){
            this.commentData[commentCounter].loggedIn = true;
          }

          this.current_user = this.cookieService.get("Current_User_Name");
        }
      }
      // end of block of code

      console.log("Following is the comment data..");
      console.log(commentData)
    });

  }

  onSubmit(){

    this.commentModel.by_user = this.current_user;
    this.commentModel.post_object_id = this.postDetail._id;
    this.commentsService.publish(this.commentModel)
    .subscribe(
      response => {
        console.log('Success!', response);
        this.commentModel = new Comment('','','');
        this.commentsService.getCommentsFromPost(this.postDetail._id).subscribe((commentData:any) =>{
          this.commentData = commentData;

          // for adding true/false for edit or delete
          var commentCounter;
          console.log("Showing all the comments.");
          for(commentCounter =0;commentCounter< this.commentData.length;commentCounter++){
            console.log(this.commentData[commentCounter]);
            this.commentData[commentCounter]["loggedIn"] = false;

            if(this.isLogggedIn){
              if(this.commentData[commentCounter].by_user == this.current_user){
                this.commentData[commentCounter].loggedIn = true;
              }

              this.current_user = this.cookieService.get("Current_User_Name");
            }
          }
          // end of block of code


          console.log("Following is the comment data..");
          console.log(commentData)
        });
      }
    )
  }

  onDeleteComment(comment_object_id){

    // deleting the comment
    this.commentsService.deleteCommentBasedOnId(comment_object_id).subscribe((data:any) =>{


      // repopulating the comments section after deleting
      this.commentModel = new Comment('','','');
        this.commentsService.getCommentsFromPost(this.postDetail._id).subscribe((commentData:any) =>{
          this.commentData = commentData;

          // for adding true/false for edit or delete
          var commentCounter;
          console.log("Showing all the comments.");
          for(commentCounter =0;commentCounter< this.commentData.length;commentCounter++){
            console.log(this.commentData[commentCounter]);
            this.commentData[commentCounter]["loggedIn"] = false;

            if(this.isLogggedIn){
              if(this.commentData[commentCounter].by_user == this.current_user){
                this.commentData[commentCounter].loggedIn = true;
              }

              this.current_user = this.cookieService.get("Current_User_Name");
            }
          }
          // end of block of code


          console.log("Following is the comment data..");
          console.log(commentData)
        });
        // end of the code for repopulating

    });
  }
}
