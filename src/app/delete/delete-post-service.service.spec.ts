import { TestBed } from '@angular/core/testing';

import { DeletePostServiceService } from './delete-post-service.service';

describe('DeletePostServiceService', () => {
  let service: DeletePostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
