<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// header('Access-Control-Allow-Origin: *');
// header( 'Access-Control-Allow-Headers: Authorization, Content-Type' );
Route::post('/register','App\Http\Controllers\UserController@register');
Route::post('/LoginPage','App\Http\Controllers\UserController@doLogin');
Route::get('/CurrentUser','App\Http\Controllers\UserController@getCurrentUser');
Route::post('/CreateCourses','App\Http\Controllers\CoursesController@CreateCourses');
Route::get('/AllCourses','App\Http\Controllers\CoursesController@getAllCourses');
Route::get('/CourseById/{id}','App\Http\Controllers\CoursesController@getCourseById');
