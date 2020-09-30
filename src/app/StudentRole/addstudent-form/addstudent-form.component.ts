import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DropDownService } from 'src/app/shared/drop-down.service';


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

  constructor(private Service:DropDownService ) { }

  ngOnInit(): void {

  this.BindDistric();
  this.BindState(); 
  this.BindCategorie();
  this.BindStudentClass();
  
   


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

  BindDistric()
  {
    this.Service.GetDistricName(1).subscribe(

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




}
