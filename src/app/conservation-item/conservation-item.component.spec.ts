import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConservationItemComponent } from './conservation-item.component';

describe('ConservationItemComponent', () => {
  let component: ConservationItemComponent;
  let fixture: ComponentFixture<ConservationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConservationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConservationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
