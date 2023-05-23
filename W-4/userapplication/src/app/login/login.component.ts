import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    public login!:FormGroup

    constructor(private formbuilder:FormBuilder, private _http:HttpClient, private route:Router){}

    ngOnInit(): void {
      this.login = this.formbuilder.group({
        email:[""],
        password:[""]
      })
    }

    loginformhandler()
    {
      this._http.get<any>("http://localhost:3000/users").subscribe(
        res => {
          const user = res.find((a:any) => {
            return a.email === this.login.value.email && a.password === this.login.value.password
          })
          console.log(user)

          if(user)
          {
            localStorage.setItem("user", user.id)
            this.login.reset();
            this.route.navigate(['dashboard'])
          }
          else{
            alert("Login Failed")
          }
        },err =>{
          alert("Error Occured")
        }
      )
    }
}
