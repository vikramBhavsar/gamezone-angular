import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private cookieService :CookieService
  ) { }

  ngOnInit(): void {
    this.cookieService.delete("Current_User_ID");
    this.cookieService.delete("Current_User_Name");
    // location.reload();
  }

}
