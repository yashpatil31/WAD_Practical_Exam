import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  public signup!:FormGroup

  constructor(private formbuilder:FormBuilder, private _http:HttpClient,private route:Router){}
  ngOnInit(): void {
    this.signup = this.formbuilder.group({
      name:[""],
      email:[""],
      password:[""]
    })
  }

  signuphandler(){
    this._http.post<any>("http://localhost:3000/users",this.signup.value).subscribe(res =>{
      alert("Login successfull")
      this.signup.reset()
      this.route.navigate(['login'])
    },err =>{
      alert("There was some error")
    })
  }
}
