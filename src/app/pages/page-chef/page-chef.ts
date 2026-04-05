import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';

@Component({
  selector: 'app-page-chef',
  imports: [TopNavComponent,SideBarComponent],
  templateUrl: './page-chef.html',
  styleUrl: './page-chef.css',
})
export class PageChef {

}
