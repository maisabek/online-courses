import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.scss']
})
export class ShowCoursesComponent implements OnInit {
  id:any;
  constructor(private _CoursesService:CoursesService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((res:any)=>{
      this.id=res.get('id');
      console.log("id = ",this.id)
    })
    this.course();
  }
   videos:any
   data:string=''
   videoInfo:any
  course(){
    this._CoursesService.getCourseById(this.id).subscribe((res:any)=>{
      this.data=res.data.course_videos;
      this.videoInfo=res.data;
      this.videos=JSON.parse(this.data);
      console.log("res === ",this.videos)
    })
  }

}
