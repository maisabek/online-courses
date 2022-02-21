import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor(private _CoursesService:CoursesService,private router:Router) { }

  ngOnInit(): void {
    this.getAllCourses()
  }
  allCourses:any;
  getAllCourses(){
    this._CoursesService.allCourses().subscribe((res:any)=>{
      this.allCourses=res.data;
      console.log("res",res)
    })
  }
  showCourse(id:any){
    console.log("id = ",id);
    this.router.navigate(["show-course",id])
  }

}
