import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BuildCourseComponent } from './components/courses/build-course/build-course.component';
import { ShowCoursesComponent } from './components/courses/show-courses/show-courses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
// import { NgSelect2Module } from 'ng-select2/lib/ng-select2.module';
// import { NgSelect2Module } from 'ng-select2/public_api';
// import { NgSelect2Module } from 'ng-select2';
// import { NgSelect2Module } from 'ng-select2';
//import { Select2Module } from 'ng2-select2';
import { FilteredSelectModule } from "filtered-select";
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component'
// import { UppyAngularDashboardModule } from '@uppy/angular'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BuildCourseComponent,
    ShowCoursesComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FilteredSelectModule,
    SelectDropDownModule,
    // UppyAngularDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
