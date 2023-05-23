import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public user:any

  constructor(private _http:HttpClient, private route:Router){
    this._http.get<any>("http://localhost:3000/users").forEach((users) =>{
      const userid = localStorage.getItem("user") || 0

      if(userid){
        this.user = users.find((a:any) =>{
          return userid == a.id
        })
      }
      else{
        this.route.navigate(['login'])
      }
    })
  }
}
