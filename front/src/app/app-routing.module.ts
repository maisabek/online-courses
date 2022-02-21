import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BuildCourseComponent } from './components/courses/build-course/build-course.component';
import { HomeComponent } from './components/home/home.component';
import {CoursesListComponent} from './components/courses/courses-list/courses-list.component'
import { ShowCoursesComponent } from './components/courses/show-courses/show-courses.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'build',component:BuildCourseComponent},
  {path:'courseList',component:CoursesListComponent},
  {path:'show-course/:id',component:ShowCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
