import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSidebarDetailsComponent } from './info-sidebar-details.component';

describe('InfoSidebarDetailsComponent', () => {
  let component: InfoSidebarDetailsComponent;
  let fixture: ComponentFixture<InfoSidebarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSidebarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSidebarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
