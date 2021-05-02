import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  title = 'app';
  userModel = new User('','');
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  showMsg: boolean = false;

  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
    this.showMsg = true;
  }
  

}
