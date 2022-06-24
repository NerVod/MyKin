import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteAttenteListeComponent } from './invite-attente-liste.component';

describe('InviteAttenteListeComponent', () => {
  let component: InviteAttenteListeComponent;
  let fixture: ComponentFixture<InviteAttenteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteAttenteListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteAttenteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
