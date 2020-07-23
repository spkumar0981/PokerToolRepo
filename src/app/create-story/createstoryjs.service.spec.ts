import { TestBed } from '@angular/core/testing';

import { CreatestoryjsService } from './createstoryjs.service';

describe('CreatestoryjsService', () => {
  let service: CreatestoryjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatestoryjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
