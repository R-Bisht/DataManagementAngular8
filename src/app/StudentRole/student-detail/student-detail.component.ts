import { Component, OnInit } from '@angular/core';
import { AddStudentService } from 'src/app/shared/add-student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {
  StudentList
  CheckRole
  constructor(private service: AddStudentService ) { }

  ngOnInit(): void {

    this.BindGetStudentList();
  }

  BindGetStudentList()
  {
this.service.GetStudentList().subscribe(
data =>{

  this.StudentList=data;
  this.CheckRole=localStorage.getItem('userRole');
},
err=>{
  console.log(err);
}

);



  } 

  DeleteStudentDetail(id:number)
{
  if(confirm("Are You Sure to  Delete"))
  console.log(id);

}

EditStudentDetail(id:number)
{
  console.log(id);
}


}
