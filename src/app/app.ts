import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar-component/side-bar-component';
import { TopNavComponent } from './components/top-nav-component/top-nav-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideBarComponent,TopNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ticket-app');
}
