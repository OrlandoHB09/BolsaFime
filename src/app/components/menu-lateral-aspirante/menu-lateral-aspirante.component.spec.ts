import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralAspiranteComponent } from './menu-lateral-aspirante.component';

describe('MenuLateralAspiranteComponent', () => {
  let component: MenuLateralAspiranteComponent;
  let fixture: ComponentFixture<MenuLateralAspiranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLateralAspiranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLateralAspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
