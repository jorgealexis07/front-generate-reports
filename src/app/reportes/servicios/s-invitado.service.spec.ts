import { TestBed } from '@angular/core/testing';

import { SInvitadoService } from './s-invitado.service';

describe('SInvitadoService', () => {
  let service: SInvitadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SInvitadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
