import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSidebarInfoComponent } from './info-sidebar-info.component';

describe('InfoSidebarInfoComponent', () => {
  let component: InfoSidebarInfoComponent;
  let fixture: ComponentFixture<InfoSidebarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSidebarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSidebarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
