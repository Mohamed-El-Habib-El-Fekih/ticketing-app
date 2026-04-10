import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar-component',
  imports: [],
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.css',
})
export class SideBarComponent {
  router : Router= new Router();
  isMenuOpen = false
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  gotoDocs() {
    this.router.navigate(['/docs']);
  }
  gotoNotif() {
    this.router.navigate(['/notification']);
  }
  gotoTickets() {
    this.router.navigate(['/tickets']);
  }
  gotoSettings() {
    this.router.navigate(['/settings']);
  }
  gotoChef() {
    this.router.navigate(['/chef']);
  }
  gototickets() {
    this.router.navigate(['/tickets']);
  }
  gotoHelp() {
    this.router.navigate(['/help']);
  }
  gotoAIAssistant() {
    this.router.navigate(['/ai-assistant']);
  }
  logout() { 
    this.router.navigate(['/login']);
  }

}
