import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DropDownService } from 'src/app/shared/drop-down.service';
import{AddStudentService}from './../../shared/add-student.service';
import {ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'; //pass data though id behalf
import { FormControl, FormGroup,Validators } from '@angular/forms';





@Component({
  selector: 'app-addstudent-form',
  templateUrl: './addstudent-form.component.html',
  styles: [
  ]
})
export class AddstudentFormComponent implements OnInit {
 // PageLoad;
 editdata=false;
  urlPhoto="";
  urlSign="";
  StateBind;
  DistricBind;
  CategorieBind;
  StudentClassBind;
  ApplicationRole;


  
  
 

  constructor(private Service:DropDownService,private Activeroute:ActivatedRoute, private router:Router, public service: AddStudentService, private toastr:ToastrService ) { }

  ngOnInit(): void {
  

    if(this.Activeroute.snapshot.params.id!='0')
    {
this.Activeroute.paramMap.subscribe(params=>{
  
  const Suid = +params.get('id');
  if(Suid)
  {
    
    this.getStudentDeatail(Suid);
    
  }

})
}



 this.service.AddStudentModule.reset();
 // this.PageLoad();
  this.BindState(); 
  this.BindCategorie();
  this.BindStudentClass();
  this.onRoleChange();
  this.setStudentID();
  
   



  }

  setStudentID()
  {
    this.service.AddStudentModule.get("StudentId").setValue("0");
  }


  getStudentDeatail(id:number)
  {

   
   this.editdata=true;
  
    
this.service.StudentData(id).subscribe((student)=>


{
  
        
      this.service.AddStudentModule=   new FormGroup({

     StudentId :new FormControl (student[0]['studentId']),  
     FirstName: new FormControl (student[0]['studentFirst'],Validators.required),
     LastName: new FormControl(student[0]['studentLast'],Validators.required),
     FatherName: new FormControl(student[0]['studentFatherName'],Validators.required),
     MotherName: new FormControl(student[0]['studentMotherName'],Validators.required),
     PhoneNo: new FormControl(student[0]['studentPhoneNo'], [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
     AadharNo: new FormControl(student[0]['studentAadharNo'],[Validators.required,Validators.maxLength(12),Validators.pattern('^[0-9]+$')]),
     Email: new FormControl(student[0]['studentEmail'], Validators.email),
     DOB: new FormControl(student[0]['studentDOB'], Validators.required),
     DOJ: new FormControl(student[0]['studentDOJ'], Validators.required),
     State: new FormControl(student[0]['studentState'], Validators.required),
     Distric: new FormControl(student[0]['studentDistrict'], Validators.required),
     Category: new FormControl(student[0]['studentCatergory'], Validators.required),
     StudentClass: new FormControl(student[0]['studentClass'], Validators.required),
     TeacherName: new FormControl(student[0]['studentTeacher'], Validators.required),
     Gender:new FormControl(''),
     PrincipalName: new FormControl(student[0]['studentPrincipal'], Validators.required),
     PermanentAddress: new FormControl(student[0]['studentPAddress'], Validators.required),
     TemporaryAddress: new FormControl(student[0]['studentTAddress'], Validators.required),
     //PhotoName:new FormControl(student[0]['studentMotherName'],Validators.required),
     //SignatureName:new FormControl(student[0]['studentMotherName'],Validators.required),
     UserName:new FormControl(student[0]['studentUserName'],Validators.required),
     ApplicationRole:new FormControl(student[0]['studentRole'],Validators.required),
     PhotoName:new FormControl(''),
     SignatureName:new FormControl(''),
     
     
  }) 
  this.BindDistric(this.service.AddStudentModule.value.State);
   
  // this.BindCategorie();
  // this.BindStudentClass();
  // this.onRoleChange();

//console.log(student)
// this.service.AddStudentModule.patchValue({
  
//  FirstName:'++'
  
 //})
}
  );
  }
GetUpdateData()
{
    this.service.AddStudentData().subscribe(
      (res: any) => {
        if (res>=1) {
          this.service.AddStudentModule.reset();
       this.toastr.success('Add New Data', 'Student Update successful.');
        } 
        if(res==0)
        {
          this.toastr.error('already taken','Save failed.');
  
        }
        else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
               this.toastr.error('already taken','Update failed.');
                break;
  
              default:
            this.toastr.error(element.description,'Update failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
    
  //  return this.http.post(this.BaseURI + '/AddStudentDetail/SaveStudentDetail', body);
} 

  //  getStudentDeatail(user)
  // {

  //   this.userobj=user;
  //   this.service.AddStudentModule.patchValue({
  //     FirstName:this.userobj.studentFirst
  //   })
  //   // FirstName:this.userobj.studentFirst,
  //   // console.log(this.userobj);

  //  // this.service.StudentData(id);

  // }

  onRoleChange()
  {

    this.Service.ApplicationRole().subscribe(

      data=>{
        this.ApplicationRole=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

  onStateChange(e)
  {
    this.BindDistric(e.target.value);
   
  }

  BindStudentClass()
  {
this.Service.GetStudentClass().subscribe(
data =>{

  this.StudentClassBind=data;
},
err=>{
  console.log(err);
}

);


  }
  BindCategorie()
  {

this.Service.GetCategorieName().subscribe(

data=>{
this.CategorieBind=data;
  },
  err=>{
    console.log(err);
  }
);

  }

  BindDistric(StateId)
  {
    this.Service.GetDistricName(StateId).subscribe(

dataD=>{
  this.DistricBind=dataD;
},
err=>{
  console.log(err);
}


    );
  }

  BindState(){
  this.Service.GetStateName().subscribe(

    data=>{
      this.StateBind=data;

    },
    err=>{
      console.log(err);
    }
  );
  }
selectfile(event){

if(event.target.files)
{
  var reader=new FileReader()
  reader.readAsDataURL(event.target.files[0])
  reader.onload=(event:any)=>{
    this.urlPhoto=event.target.result
  }
}
}

selectSign(event){
  if(event.target.files)
  {
    var signreader=new FileReader()
    signreader.readAsDataURL(event.target.files[0])
    signreader.onload=(event:any)=>{
    this.urlSign=event.target.result
      
    }
  }

}
AddStudentDetail(){

  this.service.AddStudentData().subscribe(
    (res: any) => {
      if (res>=1) {
        this.service.AddStudentModule.reset();
     this.toastr.success('Add New Data', 'Student Save successful.');
      } 
      if(res==0)
      {
        this.toastr.error('already taken','Save failed.');

      }
      else {
        res.errors.forEach(element => {
          switch (element.code) {
            case 'DuplicateUserName':
             this.toastr.error('already taken','Save failed.');
              break;

            default:
          this.toastr.error(element.description,'Save failed.');
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
