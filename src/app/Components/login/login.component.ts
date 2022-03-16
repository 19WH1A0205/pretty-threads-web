import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username=""
password=""
message=""
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
  }
submit(){
  var userInfo : any = {};
  userInfo.username = this.username;
  userInfo.password = this.password;
  this.http.post("http://localhost:8080/login", userInfo,  )
  .subscribe((resp : any) => {
    console.log(resp)
    if(resp.message == "login successful"){
      localStorage.setItem("userLoggedIn", "true")
      this.router.navigate(['products'])
    }  
  })
}
}
