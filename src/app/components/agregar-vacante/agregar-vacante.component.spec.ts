import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVacanteComponent } from './agregar-vacante.component';

describe('AgregarVacanteComponent', () => {
  let component: AgregarVacanteComponent;
  let fixture: ComponentFixture<AgregarVacanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarVacanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarVacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
