import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginControlComponent } from './login-control.component';

describe('LoginControlComponent', () => {
  let component: LoginControlComponent;
  let fixture: ComponentFixture<LoginControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginControlComponent]
    });
    fixture = TestBed.createComponent(LoginControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
