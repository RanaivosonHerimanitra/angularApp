import { TestBed, inject } from '@angular/core/testing';

import { MyservicesService } from './myservices.service';

describe('MyservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyservicesService]
    });
  });

  it('should ...', inject([MyservicesService], (service: MyservicesService) => {
    expect(service).toBeTruthy();
  }));
});
