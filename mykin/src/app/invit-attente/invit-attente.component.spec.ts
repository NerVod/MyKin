import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitAttenteComponent } from './invit-attente.component';

describe('InvitAttenteComponent', () => {
  let component: InvitAttenteComponent;
  let fixture: ComponentFixture<InvitAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
