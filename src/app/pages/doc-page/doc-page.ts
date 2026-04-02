import { Component } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';
import { Content } from '../../components/content/content';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';
@Component({
  selector: 'app-doc-page',
  imports: [SideBarComponent,Content,TopNavComponent],
  templateUrl: './doc-page.html',
  styleUrl: './doc-page.css',
})
export class DocPage {

}
