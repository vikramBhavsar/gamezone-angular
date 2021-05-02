import { Component, OnInit } from '@angular/core';
import { User } from './user'
import { LoginService } from './login.service'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'app';
  userModel = new User('','');
  topicHasError = true;
  submitted = false;
  errorMsg = '';
  showMsg: boolean = false;

  constructor(
    private cookieService : CookieService,
    private _loginService : LoginService
  ) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.submitted = true;
    this._loginService.login(this.userModel)
      .subscribe(
        response => {
        console.log('Success!', response)
        this.cookieService.set("Current_User_ID",response._id);
        this.cookieService.set("Current_User_Name",response.name);
        location.reload();
        }
        ,
        error => {
          this.errorMsg = error.statusText
          this.cookieService.delete("Current_User_ID"); 
          this.cookieService.delete("Current_User_Name"); 
        }
        )
    this.showMsg = true;
  }

}
