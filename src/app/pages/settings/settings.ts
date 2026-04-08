import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';

@Component({
  selector: 'app-settings',
  imports: [TopNavComponent,SideBarComponent],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {

}
