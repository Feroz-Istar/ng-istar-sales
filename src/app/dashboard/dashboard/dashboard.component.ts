import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginservice: LoginService) { }

  ngOnInit() {
    let complexobject = JSON.parse(localStorage.getItem("complexobject"))
    console.log(complexobject.tasks);


    this.loginservice.dummy().subscribe(
      data => {
        console.log('this is data')
        console.log(data)
      }
    )
  }

}
