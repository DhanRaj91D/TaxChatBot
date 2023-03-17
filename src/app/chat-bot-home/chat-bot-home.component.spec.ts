import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotHomeComponent } from './chat-bot-home.component';

describe('ChatBotHomeComponent', () => {
  let component: ChatBotHomeComponent;
  let fixture: ComponentFixture<ChatBotHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBotHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatBotHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
