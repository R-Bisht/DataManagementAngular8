import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-otpverify',
  templateUrl: './otpverify.component.html',
  styles: [
  ]
})
export class OTPVerifyComponent implements OnInit {

  constructor(public service: UserService,private router:Router,private toastr:ToastrService,) { }

  ngOnInit(): void {
  }
 

  otpverify() {
    
    this.service.VerifyOTP().subscribe(
      (res: any) => {
        if (res > 0) {
          this.router.navigateByUrl('user/CreatePassword');
          this.service.fromOTP.reset();
       this.toastr.success('Success!', 'Your Password Sucessfully Genrate');
      // localStorage.setItem('Key','0');
       
        } 
        if (res == 0)
        {
          this.service.fromOTP.reset();
          this.toastr.error('Invaid OTP','Please Enter Correct OTP.');

        }
        else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
               this.toastr.error('Invalid OTP','Please Check Your OTP.');
                break;

              default:
            this.toastr.error(element.description,'Server Error.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
