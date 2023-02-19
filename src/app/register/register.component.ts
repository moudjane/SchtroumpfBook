import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

})
export class RegisterComponent {
  title = 'smurfApp';
  formData: any = {};

  constructor(private http: HttpClient) { }

  submitForm() {
    this.http.post('http://localhost:5501/api/user/register', this.formData).subscribe(res => {
      console.log('response :', res);
      // Réinitialiser le formulaire après la soumission réussie
      this.formData = {};
    })
  }
}
