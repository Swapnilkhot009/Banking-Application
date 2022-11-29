import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  constructor(private http:HttpClient, private router: Router) { }

  login(data:any){
    let url ="http://localhost:8080/login";
    return this.http.post(url,data);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(sessionStorage.getItem("cID"))
      return true;
    this.router.navigate(['/login'])
    return false;
  }
}
