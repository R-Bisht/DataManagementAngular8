import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   *
   */
  constructor(private router:Router) {


  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('token')!=null)
      

      
    return true;
    else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }

  CanActivateChild(

    next:ActivatedRouteSnapshot,
    stste:RouterStateSnapshot):boolean{
      if(localStorage.getItem('OTP')=='4444')
      return true;
    
    else
    {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
  
}
