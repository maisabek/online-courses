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
  IsLoading:boolean=false;
  ngOnInit(): void {
    this.getAllCourses()
  }
  allCourses:any;
  getAllCourses(){
    this._CoursesService.allCourses().subscribe((res:any)=>{
      this.allCourses=res.data;
      this.IsLoading=true;
    })
  }
  showCourse(id:any){
    this.router.navigate(["show-course",id])
  }

}
