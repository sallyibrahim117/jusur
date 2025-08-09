import { TestBed } from '@angular/core/testing';

import { AllClientsService } from './all-clients.service';

describe('AllClientsService', () => {
  let service: AllClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
