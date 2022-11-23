import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralEmpresaComponent } from './menu-lateral-empresa.component';

describe('MenuLateralEmpresaComponent', () => {
  let component: MenuLateralEmpresaComponent;
  let fixture: ComponentFixture<MenuLateralEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLateralEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuLateralEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
