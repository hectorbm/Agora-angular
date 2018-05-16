import { TestBed, inject } from '@angular/core/testing';

import { SignUp.ServiceService } from './sign-up.service.service';

describe('SignUp.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUp.ServiceService]
    });
  });

  it('should be created', inject([SignUp.ServiceService], (service: SignUp.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
