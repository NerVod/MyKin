import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPostFriendComponent } from './wall-post-friend.component';

describe('WallPostFriendComponent', () => {
  let component: WallPostFriendComponent;
  let fixture: ComponentFixture<WallPostFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallPostFriendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPostFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
