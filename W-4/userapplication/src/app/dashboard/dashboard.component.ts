import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  public user : any

  constructor(private _http:HttpClient, private route:Router){

    this._http.get<any>("http://localhost:3000/users").forEach((users) =>{
      const uid = localStorage.getItem("user") || 0

      if(uid)
      {
        this.user = users.find((user: any) => {
          return user.id == uid
        })
      }
      else{
        this.route.navigate(['login'])
      }
    }
    )
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['login'])
  }

}
