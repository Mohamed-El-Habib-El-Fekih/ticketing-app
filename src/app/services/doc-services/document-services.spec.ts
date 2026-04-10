import { TestBed } from '@angular/core/testing';

import { DocumentServices } from './document-services';

describe('DocumentServices', () => {
  let service: DocumentServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
