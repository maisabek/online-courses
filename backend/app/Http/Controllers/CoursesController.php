<?php
namespace App\Http\Controllers;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Course;

class CoursesController extends Controller{
    public function __construct(){}
public function CreateCourses(Request $request){
    // $validators=Validator::make($request->all(),[
    //     'course_name'=>'required',
    //     'course_description'=>'required',
    //     'course_category'=>'required',
    //     'course_start'=>'required',
    //     'course_end'=>'required',
    //     'course_image'=>'required',
    //     'course_instructor'=>'required',
    //     'course_videos'=>'required',
    //     'course_grade'=>'required'
    // ]);
    // if($validators->fails()){
    //   return response()->json([
    //      'status'=>'error',
    //      'error'=>$validators->errors()
    //   ]);
    // }else{
    $CoursesItems=$request->all();
    // upload Image
    $ImageFile=$CoursesItems['course_image'];
    $fileName=$ImageFile->getClientOriginalName();
    $extension=$ImageFile->getClientOriginalExtension();
    $picture=date('His').'-'.$fileName;
    $ImageFile->move(public_path('image'),$picture);

    // upload Videos
    // $VideosFile=$CoursesItems['course_videos']; // [{},{}]
    // $length=$VideosFile->count();
    // // for($i=0;$i < $length;$i++){
    //     $VideoName=$VideosFile->getClientOriginalName();
    //     $VideoExtension=$VideosFile->getClientOriginalExtension();
    //     $video=date('His').'-'.$VideoName;
    //     $VideosFile->move(public_path('videos'),$video);
    // // }

    $courses=Course::create($CoursesItems);
    $success['CourseName']=$courses->course_name;
    $success['CourseDescription']=$courses->course_description;
    $success['CourseImage']=$courses->course_image;
    $success['CourseVideos']=$courses->course_videos;
    return response()->json([
        'status'=>'success',
        'data'=>$success
    ]);
    // }
}
public function getAllCourses(){
    $allCourses=Course::all();
    return response()->json([
        'data'=>$allCourses
    ]);
}
public function getCourseById($id){
  $course=Course::findOrFail($id);
  return response()->json([
      'data'=>$course
  ]);
}
}


