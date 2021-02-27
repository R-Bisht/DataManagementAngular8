import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { DropDownService } from './shared/drop-down.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
 import {MatButtonModule} from '@angular/material/button';
 import { MatListModule } from  '@angular/material/list';
 import {  MatSidenavModule } from  '@angular/material/sidenav';
 import { MatToolbarModule,  } from  '@angular/material/toolbar';
 import { MatIconModule,  } from  '@angular/material/icon';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AddstudentFormComponent } from './StudentRole/addstudent-form/addstudent-form.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AddRoleComponent } from './Role/add-role/add-role.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { StudentDetailComponent } from './StudentRole/student-detail/student-detail.component';
import { OTPVerifyComponent } from './user/otpverify/otpverify.component';
import { CreatePasswordComponent } from './user/create-password/create-password.component';














@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AddstudentFormComponent,
    PaymentDetailsComponent,
    AddRoleComponent,
    HomeLayoutComponent,
    StudentDetailComponent,
    OTPVerifyComponent,
    CreatePasswordComponent,

    
  ],
  imports: [
    


    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    ToastrModule.forRoot({
      progressBar: true
    }),

   
  ],
  providers: [UserService,DropDownService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }




