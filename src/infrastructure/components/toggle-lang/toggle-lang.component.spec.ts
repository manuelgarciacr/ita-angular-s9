import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLangComponent } from './toggle-lang.component';

describe('ToggleLangComponent', () => {
  let component: ToggleLangComponent;
  let fixture: ComponentFixture<ToggleLangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToggleLangComponent]
    });
    fixture = TestBed.createComponent(ToggleLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
