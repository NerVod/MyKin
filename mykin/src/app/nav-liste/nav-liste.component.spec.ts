import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListeComponent } from './nav-liste.component';

describe('NavListeComponent', () => {
  let component: NavListeComponent;
  let fixture: ComponentFixture<NavListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
