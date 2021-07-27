import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSidebarHeaderComponent } from './info-sidebar-header.component';

describe('InfoSidebarHeaderComponent', () => {
  let component: InfoSidebarHeaderComponent;
  let fixture: ComponentFixture<InfoSidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSidebarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
