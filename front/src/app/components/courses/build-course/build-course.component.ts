import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, FormArrayName, FormArray } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CoursesService} from '../../../services/courses/courses.service'
import { Router } from '@angular/router';
// import { Uppy } from '@uppy/core';
// import * as Uppy from 'uppy';

@Component({
  selector: 'app-build-course',
  templateUrl: './build-course.component.html',
  styleUrls: ['./build-course.component.scss']
})
export class BuildCourseComponent implements OnInit {
  // select2
  dropdownOptions:any[]=['Software Development','Hardware', 'Economy', 'Finance', 'Midicine']

  //select2
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl();
  filteredcategories: any;
  selectedCategories: string[] = [];
  allcategories: string[] = ["Dr.Ali","Dr.Ahmed"];

  @ViewChild('categoryInput') categoryInput:any;
  // uppy: Uppy = new Uppy({ debug: true, autoProceed: true })

  CourseForm:FormGroup;
  constructor(private fb:FormBuilder,private _CoursesService:CoursesService,private router:Router) {
    this.CourseForm=this.createFormItem('init')
  }
  ngOnInit(): void {
    this.toggleElem('Certificate_Check','Certificate_Create');
    this.toggleElem('Survey_Check','Survey_Create');
    this.filteredcategories= this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) => (category ? this._filter(category) : this.allcategories.slice())),
    );
  }
  createFormItem(itemType:any){
    let FormItem=this.fb.group({})
    switch (itemType){
      case 'init':
        FormItem=this.fb.group({
          Course_Name:'',
          Course_Description:'',
          Course_Category:'',
          Course_Start:'',
          Course_End:'',
          Course_Image:'',
          Course_Instructor:'',
          Course_Grade:'',
          Course_Videos:this.fb.array([])
        })
        break;
      case 'Create_Video':
        FormItem=this.fb.group({
           video:''
        })
    }
    return FormItem;
  }
  getVideos(){
   return this.CourseForm.get('Course_Videos') as FormArray
  }
  addVideo(){
   this.getVideos().push(this.createFormItem('Create_Video'))
  }
  removeVideo(videoIndex:any){
   this.getVideos().removeAt(videoIndex);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.selectedCategories.push(value);
    }
    this.categoryCtrl.setValue(null);
  }

  remove(category: string): void {
    const index = this.selectedCategories.indexOf(category);
    if (index >= 0) {
      this.selectedCategories.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedCategories.push(event.option.viewValue);
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allcategories.filter(category => category.toLowerCase().includes(filterValue));
  }

  toggleElem(elem:any,mydiv:any){
    var myElem=document.getElementById(elem);
    myElem?.addEventListener('click',()=>{
      document.getElementById(mydiv)?.classList.toggle("d-none")
    })
  }
  ImageData:any;
  ImageEvent(e:any){
  this.ImageData=e.target.files[0]
  }
  VideoData:any=[];
  VideoEvent(e:any){
    this.VideoData.push(e.target.files[0])
  }

  buildCourse(){
    console.log("this.ImageData = ",this.ImageData)
    console.log("this.VideoData = ",this.VideoData)

    var myFormData=new FormData();
     myFormData.append('course_name',this.CourseForm.value.Course_Name)
     myFormData.append('course_description',this.CourseForm.value.Course_Description)
     myFormData.append('course_category',this.CourseForm.value.Course_Category)
     myFormData.append('course_start',this.CourseForm.value.Course_Start)
     myFormData.append('course_end',this.CourseForm.value.Course_End)
     myFormData.append('course_image',this.ImageData)
     myFormData.append('course_instructor',this.CourseForm.value.Course_Instructor)
    for(let i=0;i<this.VideoData.length;i++){
       myFormData.append('course_videos',this.VideoData[i])
    }
    myFormData.append('course_grade',this.CourseForm.value.Course_Grade)

    this._CoursesService.CreateCourses(myFormData).subscribe((res)=>{
      console.log("res=",res)
      this.router.navigate(["courseList"])

    })
  }
  categories=[]
  selectionChanged(event:MatAutocompleteSelectedEvent){
    // this.categories.push(event.option);
    // console.log("this.categories = ",this.categories)
  }



}
