import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav-component',
  imports: [],
  templateUrl: './top-nav-component.html',
  styleUrl: './top-nav-component.css',
})
export class TopNavComponent {
  router : Router = new Router();
  gotoMessages() {
    this.router.navigate(['/messages']);
  }
  gotoNotifications() {
    this.router.navigate(['/notification']);
  }
}
