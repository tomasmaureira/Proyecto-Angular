import { TestBed } from '@angular/core/testing';

import { CharlasService } from './charlas.service';

describe('CharlasService', () => {
  let service: CharlasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharlasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
