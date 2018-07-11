<?php

namespace App\Http\Controllers\Api;

use App\Mail\MessageFromSiteVisitor;
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

      // Send email
      $data = [
        'subject' => 'Malachite Den site message',
        'name' => $request->json('name', 'anonymous'),
        'email' => $request->json('email', 'no email provided'),
        'body' => $request->json('body', ''),
      ];
      \Mail::to(env('APP_MAIL'))->queue(new MessageFromSiteVisitor($data));

      return response()->json(['ok'=>true]);
    }
}
