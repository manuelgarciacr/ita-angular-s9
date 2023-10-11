import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleThemeComponent } from './toggle-theme.component';

describe('ToggleThemeComponent', () => {
  let component: ToggleThemeComponent;
  let fixture: ComponentFixture<ToggleThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToggleThemeComponent]
    });
    fixture = TestBed.createComponent(ToggleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
