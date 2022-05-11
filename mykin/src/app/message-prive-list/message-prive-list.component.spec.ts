import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePriveListComponent } from './message-prive-list.component';

describe('MessagePriveListComponent', () => {
  let component: MessagePriveListComponent;
  let fixture: ComponentFixture<MessagePriveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePriveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePriveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
