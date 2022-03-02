import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  constructor(private _CoursesService:CoursesService,private router:Router) { }

  ngOnInit(): void {
    this.getAllCourses()
  }
  allCourses:any;
  getAllCourses(){
    this._CoursesService.allCourses().subscribe((res:any)=>{
      this.allCourses=res.data;
    })
  }

}
