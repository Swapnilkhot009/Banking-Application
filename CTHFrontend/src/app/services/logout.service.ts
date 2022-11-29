import { Injectable } from '@angular/core';
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private route:Router){}

  logout(){
    sessionStorage.clear();
    this.route.navigate(['/login'])  
  }
}
