import { TestBed } from '@angular/core/testing';

import { KcUiService } from './kc-ui.service';

describe('KcUiService', () => {
  let service: KcUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KcUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
