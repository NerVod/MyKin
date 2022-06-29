import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPostNewComponent } from './wall-post-new.component';

describe('WallPostNewComponent', () => {
  let component: WallPostNewComponent;
  let fixture: ComponentFixture<WallPostNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallPostNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallPostNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
