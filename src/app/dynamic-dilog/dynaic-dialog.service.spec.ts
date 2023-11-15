import { TestBed } from '@angular/core/testing';

import { DynaicDialogService } from './dynaic-dialog.service';

describe('DynaicDialogService', () => {
  let service: DynaicDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynaicDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
