import { Component ,OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gamezone-angular';

  isLogggedIn : boolean;
  current_user : String;
  current_user_id : String;


  constructor(
    private cookieService : CookieService
  ){}

  ngOnInit(){

    this.isLogggedIn = this.cookieService.check("Current_User_Name");

    if(this.isLogggedIn){
      this.current_user = this.cookieService.get("Current_User_Name");
      this.current_user_id = this.cookieService.get("Current_User_ID");
    }
  }

  onLogoutClick(){
    this.cookieService.delete("Current_User_ID");
    this.cookieService.delete("Current_User_Name");
    location.reload();
  }
}
