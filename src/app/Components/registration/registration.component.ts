import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  FirstName : any
  LastName : any
  Email=""
  Password=""
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get('http://localhost:8080/getusers').subscribe((result: any) => console.log(result));
  }
register(){
  this.register1(this.FirstName, this.LastName)
}

 register1(fname : any, lname : any){
  var userbody = {
    fname : this.FirstName,
    lname : this.LastName,
    email : this.Email,
    password : this.Password
  };
  console.log(userbody)
   var a = this.httpclient.post<Response>("http://localhost:8080/registeruser",userbody)
   a.subscribe((res:any) => {
    console.log(res.message)
    alert("User Registration successful for " +fname +" " +lname)
    this.clearValues();
   })
     
   }

   clearValues(){
     this.FirstName = "";
     this.LastName = "";
     this.Email = "";
     this.Password = "";
   }
 }
