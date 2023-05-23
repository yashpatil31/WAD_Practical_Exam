import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public login!:FormGroup

  constructor(private formbuilder:FormBuilder, private _http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.login = this.formbuilder.group({
      email:[""],
      password:[""]
    })
  }

  loginhandler()
  {
    this._http.get<any>("http://localhost:3000/users").subscribe(res => {
      const user = res.find((a:any) =>{
        return a.email == this.login.value.email && a.password == this.login.value.password
      })

      if(user)
      {
        localStorage.setItem("user",user.id)
        this.login.reset()
        this.router.navigate(['dashboard'])
      }
      else{
        alert("Invalid credentials")
      }
    },err => {
      alert("There was some error")
    })
  }
  

}
