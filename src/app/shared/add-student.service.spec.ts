import { TestBed } from '@angular/core/testing';

import { AddStudentService } from './add-student.service';

describe('AddStudentService', () => {
  let service: AddStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
