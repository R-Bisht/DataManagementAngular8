import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import{AddStudentService}from './../../shared/add-student.service';
import { FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styles: [
  ]
})
export class EditStudentComponent implements OnInit {
//alert:boolean=false;
userobj={
  studentFirst:''

}
  EditStudentList=new FormGroup({
    studentFirst: new FormControl('')
    // LastName: new FormControl(''),
    // FatherName: new FormControl(''),
    // MotherName: new FormControl('')

  })

  constructor(public Activeroute :ActivatedRoute,private service:AddStudentService) { }

  ngOnInit(): void {

   // this.userobj=user;
  //     this.service.StudentData(this.Activeroute.snapshot.params.id).subscribe((data)=>{
        
  //     this.EditStudentList=new FormGroup({2
  //       studentFirst: new FormControl(data['studentFirst'])
  //   // LastName: new FormControl(result['studentLast']),
  //   // FatherName: new FormControl(result['studentFatherName']),
  //   // MotherName: new FormControl(result['studentMotherName'])
  // }) 
  //   })

    
  }

}
