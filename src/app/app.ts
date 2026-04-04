import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar-component/side-bar-component';
import { TopNavComponent } from './components/top-nav-component/top-nav-component';
import { DocPage } from './pages/doc-page/doc-page';
import { LoginPage } from './pages/login-page/login-page';
import { SignUp } from './pages/sign-up/sign-up';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideBarComponent,TopNavComponent,DocPage,LoginPage,SignUp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ticket-app');
}
