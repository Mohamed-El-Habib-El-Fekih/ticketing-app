import { Component, Inject, inject } from '@angular/core';
import { SideBarComponent } from '../../components/side-bar-component/side-bar-component';
import { Content } from '../../components/content/content';
import { TopNavComponent } from '../../components/top-nav-component/top-nav-component';
import { DocumentServices } from '../../services/doc-services/document-services';
import { Document } from '../../models/document.model';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
@Component({
  selector: 'app-doc-page',
  imports: [SideBarComponent,Content,TopNavComponent,CommonModule,SafeUrlPipe],
  templateUrl: './doc-page.html',
  styleUrl: './doc-page.css',
})
export class DocPage {
  documentService = inject(DocumentServices);
  documents=this.documentService.getDocuments();;
  selectedPdf: Document | null = null;
  preview(doc: Document) {
  this.selectedPdf = doc;
  }
  uploadPdf(event: any) {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.documentService.addDocument({
        id: Date.now(),
        name: file.name,
        url: reader.result as string,
        date: new Date(),
        size: file.size
      });

      this.documents = this.documentService.getDocuments();
    };
    reader.readAsDataURL(file);
  }

}
