import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  submitForm() {
    this.http.post('http://localhost:5501/api/user/login', this.loginData).subscribe(res => {
      console.log('response :', res)
      localStorage.setItem("jwt", JSON.stringify(res));
      this.router.navigate(['/home'])
    })
  }
}
