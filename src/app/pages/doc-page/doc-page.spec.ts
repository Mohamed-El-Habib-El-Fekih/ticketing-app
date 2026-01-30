import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPage } from './doc-page';

describe('DocPage', () => {
  let component: DocPage;
  let fixture: ComponentFixture<DocPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
