import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSiderbarHeaderComponent } from './messages-siderbar-header.component';

describe('MessagesSiderbarHeaderComponent', () => {
  let component: MessagesSiderbarHeaderComponent;
  let fixture: ComponentFixture<MessagesSiderbarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesSiderbarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesSiderbarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
