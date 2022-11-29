import { Component } from '@angular/core';
import { Router,Event, NavigationStart } from '@angular/router';
import { BankdetailsService } from './services/bankdetails.service';
import { LogoutService } from './services/logout.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CTHFrontend';
  constructor(private route:Router ,private logoutSer:LogoutService, private bankDetSer: BankdetailsService) {
      this.route.events.subscribe((routerEvents:Event)=>{
        if(routerEvents instanceof NavigationStart){
          if((routerEvents.id===1 && routerEvents.url!="/")){
            if((routerEvents.id===1 && routerEvents.url!="/login")){
              this.logoutSer.logout();
              alert("Invalid action detected you are logged out !")
            }
          }
          if(routerEvents.navigationTrigger==="popstate"){
            this.logoutSer.logout();
            alert("Invalid action detected you are logged out !")
          }
        }
      });
      
    }
}
