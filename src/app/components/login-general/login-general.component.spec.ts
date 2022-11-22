import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGeneralComponent } from './login-general.component';

describe('LoginGeneralComponent', () => {
  let component: LoginGeneralComponent;
  let fixture: ComponentFixture<LoginGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
