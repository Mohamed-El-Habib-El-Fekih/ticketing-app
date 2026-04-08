import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './components/side-bar-component/side-bar-component';
import { TopNavComponent } from './components/top-nav-component/top-nav-component';
import { DocPage } from './pages/doc-page/doc-page';
import { LoginPage } from './pages/login-page/login-page';
import { SignUp } from './pages/sign-up/sign-up';
import { PageChef } from './pages/page-chef/page-chef';
import { Notif } from './pages/notif/notif';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideBarComponent,PageChef,TopNavComponent,DocPage,LoginPage,SignUp,Notif],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ticket-app');
}
