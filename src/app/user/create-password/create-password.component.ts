import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styles: [
  ]
})
export class CreatePasswordComponent implements OnInit {

  constructor(public service: UserService,private router:Router) { }

  ngOnInit(): void {
  }

  GenratePassword()
  {
    
  }
}
