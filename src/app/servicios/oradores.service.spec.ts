import { TestBed } from '@angular/core/testing';

import { OradoresService } from './oradores.service';

describe('OradoresService', () => {
  let service: OradoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OradoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
