import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSidebarMediaListComponent } from './info-sidebar-media-list.component';

describe('InfoSidebarMediaListComponent', () => {
  let component: InfoSidebarMediaListComponent;
  let fixture: ComponentFixture<InfoSidebarMediaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSidebarMediaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSidebarMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
