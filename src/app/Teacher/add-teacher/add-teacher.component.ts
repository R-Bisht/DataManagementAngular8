import { Component, OnInit } from '@angular/core';
import{AddTeacherService}from './../../shared/add-teacher.service';
import {ToastrService } from 'ngx-toastr';

 

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styles: [
  ]
})
export class AddTeacherComponent implements OnInit {
  urlPhoto="";
 

  constructor(public service: AddTeacherService, private toastr:ToastrService ) { }

  ngOnInit(): void {
    
  }

  AddTeacherDetail()
  {
    
  }
  selectfileTeacher(event)
  {
    if(event.target.files)
{
  var reader=new FileReader()
  reader.readAsDataURL(event.target.files[0])
  reader.onload=(event:any)=>{
    this.urlPhoto=event.target.result
  }
}
  }
}
