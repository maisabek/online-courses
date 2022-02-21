<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model{
    protected $fillable=['course_name','course_description','course_category','course_start','course_end','course_image','course_instructor','course_videos','course_grade'];
    public function users(){
        return $this->belongsToMany(User::class);
    }
}
