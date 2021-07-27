import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatHeaderComponent } from './main-chat-header.component';

describe('MainChatHeaderComponent', () => {
  let component: MainChatHeaderComponent;
  let fixture: ComponentFixture<MainChatHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainChatHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
