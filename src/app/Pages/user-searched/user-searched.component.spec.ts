import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchedComponent } from './user-searched.component';

describe('UserSearchedComponent', () => {
  let component: UserSearchedComponent;
  let fixture: ComponentFixture<UserSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSearchedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
