import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPostComponent } from './wall-post.component';

describe('WallPostComponent', () => {
  let component: WallPostComponent;
  let fixture: ComponentFixture<WallPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
