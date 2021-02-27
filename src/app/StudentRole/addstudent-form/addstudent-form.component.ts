import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DropDownService } from 'src/app/shared/drop-down.service';
import{AddStudentService}from './../../shared/add-student.service';
import {ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addstudent-form',
  templateUrl: './addstudent-form.component.html',
  styles: [
  ]
})
export class AddstudentFormComponent implements OnInit {

  urlPhoto="";
  urlSign="";
  StateBind;
  DistricBind;
  CategorieBind;
  StudentClassBind;
  ApplicationRole;

  constructor(private Service:DropDownService, public service: AddStudentService, private toastr:ToastrService ) { }

  ngOnInit(): void {

 
  this.BindState(); 
  this.BindCategorie();
  this.BindStudentClass();
  this.onRoleChange();
  
   


  }

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
