import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListUserComponent } from './post-list-user.component';

describe('PostListUserComponent', () => {
  let component: PostListUserComponent;
  let fixture: ComponentFixture<PostListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
