import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChef } from './page-chef';

describe('PageChef', () => {
  let component: PageChef;
  let fixture: ComponentFixture<PageChef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageChef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
