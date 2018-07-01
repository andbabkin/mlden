<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContentController extends Controller
{
    public function index(){
      $content = [
        "intro" => "Welcome to Malachite Den, "
          ."the home office of software developer "
          ."(Web, Android, Games, ...)",
        "about" => "<p>Hi, I'm Andrei Babkin, self-employed software developer from Estonia,"
          ."who converts amazing ideas into working applications."
          ."I'm equally comfortable working with a team or flying solo.</p>"
          ."<p>Last time I was working hard with Web apps and became familiar"
          ."with following front- and back-end frameworks: Vue.js, Angular 6, Bootstrap 3-4, and Laravel 5.</p>"
          ."<p>In addition to being able to develop Web Applications, I have also an experience"
          ."in developing Information Systems, Android Games,"
          ."and have a lot of time spent while creating different Excel VBA tools."
          ."So, feel free to contact me if you need my participation in your project.</p>"
      ];
      return response()->json($content);
    }
}
