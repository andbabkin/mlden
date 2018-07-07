<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    public function message(Request $request){
      // Validate user input
      $rules = [
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255',
        'body' => 'required',
      ];
      $this->validate($request, $rules);

      return response()->json(['ok'=>true]);
    }
}
