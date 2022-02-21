<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Courses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses',function(Blueprint $table){
          $table->id();
          $table->string("course_name");
          $table->string("course_description");
          $table->string("course_category");
          $table->string("course_start");
          $table->string("course_end");
          $table->string("course_image");
          $table->string("course_instructor");
          $table->json("course_videos");
          $table->string("course_grade");
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('courses');
    }
}
