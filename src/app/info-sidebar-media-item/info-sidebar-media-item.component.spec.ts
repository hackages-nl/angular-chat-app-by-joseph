import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSidebarMediaItemComponent } from './info-sidebar-media-item.component';

describe('InfoSidebarMediaItemComponent', () => {
  let component: InfoSidebarMediaItemComponent;
  let fixture: ComponentFixture<InfoSidebarMediaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSidebarMediaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSidebarMediaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
