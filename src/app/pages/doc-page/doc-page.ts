import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';
import { Content } from '../../components/content/content';
@Component({
  selector: 'app-doc-page',
  imports: [SideBarComponent,Content],
  templateUrl: './doc-page.html',
  styleUrl: './doc-page.css',
})
export class DocPage {

}
