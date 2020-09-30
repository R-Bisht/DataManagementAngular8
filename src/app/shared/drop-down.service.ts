import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DropDownService {

  constructor(private http:HttpClient) { }

  readonly BaseURI = 'http://localhost:58365/api';

GetStateName(){
  return  this.http.get(this.BaseURI+'/DropDown/State');
}
GetDistricName(StateId)
{
  return this.http.get(this.BaseURI+'/DropDown/District/'+StateId);
}

GetCategorieName()
{
return this.http.get(this.BaseURI+'/DropDown/CategorieName');

}

GetStudentClass()
{
  return this.http.get(this.BaseURI+'/DropDown/StudentClass');
}
}
