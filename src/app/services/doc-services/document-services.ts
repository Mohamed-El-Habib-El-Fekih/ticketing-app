import { Injectable } from '@angular/core';
import { Document } from '../../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentServices {
   private documents: Document[] = [];

  getDocuments() {
    return this.documents;
  }

  addDocument(doc: Document) {
    this.documents.push(doc);
  }
}
