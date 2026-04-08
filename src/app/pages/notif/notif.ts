import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';

@Component({
  selector: 'app-notif',
  imports: [TopNavComponent,SideBarComponent],
  templateUrl: './notif.html',
  styleUrl: './notif.css',
})
export class Notif {

}
