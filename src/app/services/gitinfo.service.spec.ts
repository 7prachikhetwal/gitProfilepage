import { TestBed } from '@angular/core/testing';

import { GitinfoService } from './gitinfo.service';

describe('GitinfoService', () => {
  let service: GitinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
