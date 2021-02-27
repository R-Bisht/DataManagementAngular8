import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  OTPStor: any;
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  // readonly BaseURI = 'http://localhost:56655/api';58365
  readonly BaseURI = 'http://localhost:58365/api';

  formModel = this.fb.group({
    
    // Password: ['', Validators.required],
    // ConfirmPassword: ['', Validators.required],
  //  Email: ['', Validators.email],
  MobileNo: ['',[Validators.required,Validators.minLength(10)]],
    // FullName: [''],
    

  });

    comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  fromOTP=this.fb.group({
    UserName: ['', Validators.required],
    OTPNumber:['',[Validators.required,Validators.minLength(4)]],

    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(8)]],

      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  CreatePassword=this.fb.group({
    Password: ['', Validators.required],
    ConfirmPassword: ['', Validators.required]
  });


  register()
   {
     var OTPList = {
      
       ToNumber:this.formModel.value.MobileNo ,
      
      // ConfirmPassword:this.formModel.value.ConfirmPassword
      // Email: this.formModel.value.Email,
      // FullName: this.formModel.value.FullName,
      // Password: this.formModel.value.Passwords.Password
    };
    
   // return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  return this.http.post(this.BaseURI + '/GenrateOTP/CreateOTP', OTPList);
   // this.OTPStor=sessionStorage.setItem(a.OTPNumber);
  }
  login(fromData){


    return this.http.post(this.BaseURI + '/ApplicationUser/Login', fromData);
  }
  getUserProfile(){
    return this.http.get(this.BaseURI + '/UserProfile');
  }

  
  VerifyOTP()
  {
    var OTPVerifyNumber={
      UserRegisterNo: this.fromOTP.value.UserName,
      UserPassword:this.fromOTP.value.Passwords.Password,
      OTPNumber: this.fromOTP.value.OTPNumber,
      SendOTP:localStorage.getItem('Key')

    };
    return this.http.post(this.BaseURI+'/GenrateOTP/VerifyOTP',OTPVerifyNumber);
  }
}

