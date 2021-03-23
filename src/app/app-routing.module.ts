import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AddstudentFormComponent } from './StudentRole/addstudent-form/addstudent-form.component';
import { AddRoleComponent } from './Role/add-role/add-role.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { StudentDetailComponent } from './StudentRole/student-detail/student-detail.component';
import { OTPVerifyComponent } from './user/otpverify/otpverify.component';
import { CreatePasswordComponent } from './user/create-password/create-password.component';
import { AddTeacherComponent } from './Teacher/add-teacher/add-teacher.component';
import { TeacherDetailComponent } from './Teacher/teacher-detail/teacher-detail.component';
import { EditStudentComponent } from './UpdateStudent/edit-student/edit-student.component';


const routes: Routes = [
  
 
{path:'',redirectTo:'/user/registration',pathMatch:'full'},

  {path:'user',component:UserComponent,
children:[
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'OTPVerify',component:OTPVerifyComponent},
  {path:'CreatePassword',component:CreatePasswordComponent,canActivate:[AuthGuard]},


]
  },
//   { path: 'Main', component: HomeLayoutComponent,canActivate:[AuthGuard],
//   children: [
//    { path: '', redirectTo: 'StudentDetail', pathMatch: 'full' },
//    { path: 'StudentDetail', component: StudentDetailComponent },
//   ]
//  },
 { path: 'Admin', component: HomeLayoutComponent,canActivate:[AuthGuard],
  children: [
   { path: '', redirectTo: 'StudentDetail', pathMatch: 'full' },
     { path: 'AddStudent/:id',  component: AddstudentFormComponent },
  //  { path: 'EditStudent/:id',  component:EditStudentComponent },
   { path: 'StudentDetail', component: StudentDetailComponent },
   { path: 'AddTeacher', component:AddTeacherComponent  },
   { path: 'TeacherDetail', component: TeacherDetailComponent },
  ]
 },

 { path: 'Student', component: HomeLayoutComponent,canActivate:[AuthGuard],
 children: [
  // { path: 'AddStudent',  component: AddstudentFormComponent },
  { path: '', redirectTo: 'StudentDetail', pathMatch: 'full' },
  { path: 'StudentDetail', component: StudentDetailComponent },
 ]
},
  //{path:'home',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }


 