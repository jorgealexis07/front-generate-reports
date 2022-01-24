import { TestBed } from '@angular/core/testing';

import { SEmpleadoService } from './s-empleado.service';

describe('SEmpleadoService', () => {
  let service: SEmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEmpleadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
