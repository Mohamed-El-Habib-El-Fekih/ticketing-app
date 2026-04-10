import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { LoginServices } from '../../services/login-services/login-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login-page',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private router = inject(Router);
  public service = inject(LoginServices);

  islogin = true;
  email: string = '';
  password: string = '';
  createAccount() {
    this.router.navigate(['/signup']);
  }
  login() {
    const workers = this.service.getWorkers();
    const worker = workers.find(w => w.email === this.email && w.password === this.password);
    if (worker) {
      this.service.currentWorker(worker);
      this.router.navigate(['/docs']);
    }
    else {
      this.islogin = false;
    }
  }
}
