import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  imports: [RouterOutlet],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  router : Router= new Router();
  createAccount() {
    this.router.navigate(['/signup']);
  }
}
