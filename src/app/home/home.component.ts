import { Component, OnInit  } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
// faBars, faHome, faMicrophoneSlash, faBus, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styles: [
  ]

})
export class HomeComponent implements OnInit {

  //  fabars=faBars;
  // fahome=faHome ; 
  // famessage=faEnvelope; 
 
  

  userDetails;
  userAuth;
  userRole;
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {

    
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
     //   localStorage.setItem('AuthUser',);
      },
      err => {
        console.log(err);

      },
    );
  }
  onLogout()
{
  localStorage.removeItem('token');
  this.router.navigate(['/user/login']);
}

}
