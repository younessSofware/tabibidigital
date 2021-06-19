import { TestBed } from '@angular/core/testing';

import { MaladeService } from './malade.service';

describe('MaladeService', () => {
  let service: MaladeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaladeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
