import { TestBed } from '@angular/core/testing';

import { MessagePrivesService } from './services/message-prives.service';

describe('MessagePrivesService', () => {
  let service: MessagePrivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagePrivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
