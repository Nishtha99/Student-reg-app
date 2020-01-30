import { TestBed } from '@angular/core/testing';

import { JsondatapackService } from './jsondatapack.service';

describe('JsondatapackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsondatapackService = TestBed.get(JsondatapackService);
    expect(service).toBeTruthy();
  });
});
