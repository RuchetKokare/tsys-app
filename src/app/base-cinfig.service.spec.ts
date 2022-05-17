import { TestBed } from '@angular/core/testing';

import { BaseCinfigService } from './base-cinfig.service';

describe('BaseCinfigService', () => {
  let service: BaseCinfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCinfigService);
  });

  it('should be created', () => 
  {
    expect(service).toBeTruthy();
  });
});