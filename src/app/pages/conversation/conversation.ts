import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';

@Component({
  selector: 'app-conversation',
  imports: [TopNavComponent,SideBarComponent],
  templateUrl: './conversation.html',
  styleUrl: './conversation.css',
})
export class Conversation {

}
