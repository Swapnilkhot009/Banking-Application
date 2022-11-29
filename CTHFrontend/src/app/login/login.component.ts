import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  loggedIn!: boolean;
  invalid!:string;
  customerID?:any; 

  constructor(private fb: FormBuilder, private route:Router,private loginSer:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',[Validators.required]]
    })
  }

  login(){
    this.loginSer.login(this.loginForm.value).subscribe(
      (data)=>{
        this.invalid = "";
        this.customerID=data;
        this.setLoggedIn(true);
        sessionStorage.setItem("cID",this.customerID);
        this.route.navigate(["/home"]);
      },
      (error) =>{
        this.setLoggedIn(false);
        this.invalid = error.error.message
      }
    );
  }
  setLoggedIn(value:boolean){
    this.loggedIn = value
  }

}
