import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradasysalidasusuariosComponent } from './entradasysalidasusuarios.component';

describe('EntradasysalidasusuariosComponent', () => {
  let component: EntradasysalidasusuariosComponent;
  let fixture: ComponentFixture<EntradasysalidasusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntradasysalidasusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradasysalidasusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
