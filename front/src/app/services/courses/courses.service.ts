import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }
  CreateCourses(data:any){
   return this.http.post('http://localhost:8000/CreateCourses',data)
  }
  allCourses(){
    return this.http.get('http://localhost:8000/AllCourses')
  }
  getCourseById(id:any){
    return this.http.get('http://localhost:8000/CourseById/'+id);
  }
}
