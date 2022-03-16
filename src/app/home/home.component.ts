import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
isUserLoggedIn(){
  if(localStorage.getItem("userLoggedIn")=="true"){
    return true
  }
  return false
}
Logout(){
  localStorage.removeItem("userLoggedIn")
  this.router.navigate(['/home'])
}
}
