import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { AddStudentService } from 'src/app/shared/add-student.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { AddstudentFormComponent } from '../addstudent-form/addstudent-form.component';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styles: [
  ]
})

export class StudentDetailComponent implements OnInit {

 
  
  StudentList
  CheckRole
  constructor(private service: AddStudentService,private router:Router ) { }
    
  ngOnInit( ): void {
    
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

  EditStudentDetail(StudentId:Number)
  {
 
   
    this.router.navigateByUrl('Admin/AddStudent/'+StudentId);

  }

  DeleteStudentDetail(studentId:number)
{
  //Swal.fire('Oops...', 'Something went wrong!', 'error')
  Swal.fire({
    title: 'Are you sure?',
    text: 'You Want Delete This Student!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      if(studentId>0)
      {
        this.service.DeleteStudent(studentId).subscribe(

          (res: any) => {
           
            if (res>=1) {
            //  this.service.AddStudentModule.reset();
              Swal.fire(
                'Deleted!',
                'Your imaginary file has been deleted.',
                'success'
              )
              this.ngOnInit();
            }
           else if(res<1)
            {
              Swal.fire('Oops...', 'Something went wrong!', 'error')
            }
            this.ngOnInit();
           } );
       // alert(id)

  
      }
    // For more information about handling dismissals please visit
    // https://sweetalert2.github.io/#handling-dismissals
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
  // if(confirm("Are You Sure to  Delete"))
  // console.log(id);

}

// EditStudentDetail(studentId:number)
// {
  

//   // this.service.UpdateStudent(studentId).subscribe(
//   //   (res: any) => {
           
//   //     if (res>=1) {

//         this.router.navigateByUrl('Admin/AddStudent?'+studentId+'');
        
// //       }
// //     }


// //   )
//  }


}
