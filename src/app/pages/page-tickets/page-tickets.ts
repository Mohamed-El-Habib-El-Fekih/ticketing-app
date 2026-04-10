import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';

@Component({
  selector: 'app-page-tickets',
  imports: [TopNavComponent,SideBarComponent],
  templateUrl: './page-tickets.html',
  styleUrl: './page-tickets.css',
})
export class PageTickets {

}
