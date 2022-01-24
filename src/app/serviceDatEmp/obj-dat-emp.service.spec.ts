import { TestBed } from '@angular/core/testing';

import { ObjDatEmpService } from './obj-dat-emp.service';

describe('ObjDatEmpService', () => {
  let service: ObjDatEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjDatEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
