import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { Post } from './post';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-new-discussion',
  templateUrl: './new-discussion.component.html',
  styleUrls: ['./new-discussion.component.css']
})
export class NewDiscussionComponent{

  title = 'app';
  postModel = new Post('','','');
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  showMsg: boolean = false;
  

  constructor(
    private cookieService : CookieService,
    private _enrollmentService: EnrollmentService) {}

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {

    this.postModel.user_name = this.cookieService.get("Current_User_Name");
    console.log(`At the time of submission following is the data: ${this.postModel.post_title}`)
    this.submitted = true;
    this._enrollmentService.enroll(this.postModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
    this.showMsg = true;
  }
  
}
