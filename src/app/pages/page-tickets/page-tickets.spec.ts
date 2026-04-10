import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTickets } from './page-tickets';

describe('PageTickets', () => {
  let component: PageTickets;
  let fixture: ComponentFixture<PageTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTickets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
