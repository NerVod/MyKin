import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePriveNewComponent } from './message-prive-new.component';

describe('MessagePriveNewComponent', () => {
  let component: MessagePriveNewComponent;
  let fixture: ComponentFixture<MessagePriveNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePriveNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePriveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
