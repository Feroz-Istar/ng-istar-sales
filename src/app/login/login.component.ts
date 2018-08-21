import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import { HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form1: FormGroup;
  email: FormControl;
  password: FormControl;
  isError
  constructor(private loginservice: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.isError = false;
    // this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
    this.email = new FormControl('', Validators.compose([Validators.required, Validators.pattern('([a-zA-Z0-9.!#$%&’*+/=?^_{|}~-]+@[a-zA-Z0-9-]+[.](?:\[a-zA-Z0-9-]+))')]))
    this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(7)]))


    this.form1 = new FormGroup({
      email: this.email,
      password: this.password

    });




    if (localStorage.getItem('complexobject')) {
      console.log("user already exist")
      this.router.navigate(['../dashboard'], { relativeTo: this.route });

    } else {
      console.log("user login required")

    }
  }

  onSubmit() {
    this.isError = false;

    console.log('submit called')
    console.log(this.form1.get('email').value)
    console.log(this.form1.get('password').value)
    const body = new HttpParams()
      .set('email', this.form1.get('email').value)
      .set('password', this.form1.get('password').value);
    this.loginservice.authentication(body).subscribe(response => {
      console.log(response)


      if (response !== undefined) {
        localStorage.setItem('complexobject', JSON.stringify(response));
        this.router.navigate(['../dashboard'], { relativeTo: this.route });

      }
      else
        this.isError = true;

    });
  }

}
