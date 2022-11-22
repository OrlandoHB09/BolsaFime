import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantesCargadasComponent } from './vacantes-cargadas.component';

describe('VacantesCargadasComponent', () => {
  let component: VacantesCargadasComponent;
  let fixture: ComponentFixture<VacantesCargadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacantesCargadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacantesCargadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
