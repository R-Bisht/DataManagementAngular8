import { Injectable } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import{HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddTeacherService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'http://localhost:58365/api';
  AddTeacherModule=this.fb.group({

    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    PhoneNo: ['', [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]],
    Email: ['', Validators.email],
    AssignClass :['', Validators.required],
    ClassTeacher :['', Validators.required],
    Education :['', Validators.required],
    Address :['', Validators.required],
    SubjectTeacher :['', Validators.required],
    ImageName :['', Validators.required],
    CreateBy :['', Validators.required],
    CreatedDate :['', Validators.required],
  });
}
