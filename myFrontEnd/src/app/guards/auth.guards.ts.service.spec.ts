import { TestBed, inject } from '@angular/core/testing';

import { Auth.Guards.TsService } from './auth.guards.ts.service';

describe('Auth.Guards.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth.Guards.TsService]
    });
  });

  it('should be created', inject([Auth.Guards.TsService], (service: Auth.Guards.TsService) => {
    expect(service).toBeTruthy();
  }));
});
