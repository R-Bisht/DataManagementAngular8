import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  formModel={
    UserName:'',
    Password:''
  }

  constructor(private service:UserService,private router:Router,private toastr:ToastrService) {}


  ngOnInit(): void {
    if (localStorage.getItem('token')!=null && localStorage.getItem('userRole')=='5')
    {
      this.router.navigate(['Admin/StudentDetail']);
    }
    else if (localStorage.getItem('token')!=null && localStorage.getItem('userRole')=='4')
    {
      this.router.navigate(['Student/StudentDetail']);
    }
    else{
      this.router.navigate(['user/login']);
    }
  }
  login(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userRole', res.userRole);
        localStorage.setItem('userId', res.userId);

         if (localStorage.getItem('token')!=null && localStorage.getItem('userRole')=='5')
    {
      this.router.navigateByUrl('Admin/StudentDetail');
    }
    else if (localStorage.getItem('token')!=null && localStorage.getItem('userRole')=='4')
    {
      this.router.navigateByUrl('Student/StudentDetail');
    }

       // this.router.navigateByUrl('/Main/StudentDetail');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }

}
