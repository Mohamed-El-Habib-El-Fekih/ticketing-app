import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServices } from '../../services/login-services/login-services';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'side-bar-component',
  imports: [CommonModule],
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.css',
})
export class SideBarComponent {
  private router = inject(Router);
  public service = inject(LoginServices);
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
  gotoWorkers() {
    this.router.navigate(['/workers']);
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
