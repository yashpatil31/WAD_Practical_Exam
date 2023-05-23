import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public signup!:FormGroup

  constructor(private formbuilder:FormBuilder, private _http:HttpClient, private router:Router){}

  ngOnInit(): void {
    this.signup = this.formbuilder.group({
      fname:[""], 
      phone:[""],
      email:[""],
      password:[""]
    })
  }

  signupformhandler()
  {
    console.log(this.signup.value)
    this._http.post<any>("http://localhost:3000/users",this.signup.value).subscribe(
      res =>{
        alert("Signup Successful")
        this.signup.reset();
        this.router.navigate(["/login"])
      },err =>{
        console.log("something went wrong")
      })
  }
}
