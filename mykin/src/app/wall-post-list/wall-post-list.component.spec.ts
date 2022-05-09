import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPostListComponent } from './wall-post-list.component';

describe('WallPostListComponent', () => {
  let component: WallPostListComponent;
  let fixture: ComponentFixture<WallPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
