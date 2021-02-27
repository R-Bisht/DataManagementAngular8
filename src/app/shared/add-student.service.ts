import { Injectable } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
import{HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

 UserRole;
  //Reactive from module

  //Note-formBuilder to create an instance of a formGroup that is stored in the from .
  constructor(private fb: FormBuilder, private http: HttpClient) { }


  readonly BaseURI = 'http://localhost:58365/api';

  AddStudentModule = this.fb.group({
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    FatherName: ['', Validators.required],
    MotherName: ['', Validators.required],
    PhoneNo: ['', [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]],
    AadharNo: ['',[Validators.required,Validators.maxLength(12),Validators.pattern('^[0-9]+$')]],
    Email: ['', Validators.email],
    DOB: ['', Validators.required],
    DOJ: ['', Validators.required],
    State: ['', Validators.required],
    Distric: ['', Validators.required],
    Category: ['', Validators.required],
    StudentClass: ['', Validators.required],
    TeacherName: ['', Validators.required],
    Gender:[''],
    PrincipalName: ['', Validators.required],
    PermanentAddress: ['', Validators.required],
    TemporaryAddress: ['', Validators.required],
    PhotoName:['',Validators.required],
    SignatureName:['',Validators.required],
    UserName:['',Validators.required],
    ApplicationRole:['',Validators.required],
  });

  AddStudentData()
  {
    var body = {
      
      ASD_FirstName: this.AddStudentModule.value.FirstName,
      ASD_LastName: this.AddStudentModule.value.LastName,
      ASD_FatherName: this.AddStudentModule.value.FatherName,
      ASD_MotherName: this.AddStudentModule.value.MotherName,
      ASD_PhoneNo: this.AddStudentModule.value.PhoneNo,
      ASD_EmailId:  this.AddStudentModule.value.Email,
      ASD_AadharNo: this.AddStudentModule.value.AadharNo,
      ASD_DOB: this.AddStudentModule.value.DOB,    
      ASD_State: this.AddStudentModule.value.State,
      ASD_Distric: this.AddStudentModule.value.Distric,
      ASD_Category: this.AddStudentModule.value.Category,
      ASD_StudentClass: this.AddStudentModule.value.StudentClass,
      ASD_DOJ: this.AddStudentModule.value.DOJ,
      ASD_gender: this.AddStudentModule.value.Gender,
      ASD_PrincipalName: this.AddStudentModule.value.PrincipalName,
      ASD_TeacherName: this.AddStudentModule.value.TeacherName,
      ASD_Leaving_Status:0,
      ASD_PermanentAddress: this.AddStudentModule.value.PermanentAddress,
      ASD_TemporaryAddress: this.AddStudentModule.value.TemporaryAddress,
      ASD_ImageName: this.AddStudentModule.value.PhotoName,
      ASD_SignatureName: this.AddStudentModule.value.SignatureName, 
      ASD_Application_Role:this.AddStudentModule.value.ApplicationRole, 
      ASD_UserName:this.AddStudentModule.value.UserName, 
      ASD_CreateBy:1,
      ASD_CreatedDate:'01-01-2020',
    };    

    
    return this.http.post(this.BaseURI + '/AddStudentDetail/SaveStudentDetail', body);
  
  }

  GetStudentList()
  {
// var RoleUser={ 
  
//   IdentityUserRole: localStorage.getItem('userRole'),
//   IdentityUserId:localStorage.getItem('userId'),
//       };
let RoleUser=new HttpParams();

RoleUser=RoleUser.append('IdentityUserRole',localStorage.getItem('userRole'));
RoleUser=RoleUser.append('IdentityUserId',localStorage.getItem('userId'));


    return this.http.get(this.BaseURI+'/AddStudentDetail/StudentList',{params: RoleUser});
  }
  
}
