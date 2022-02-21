<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
//use Auth;
use Illuminate\Support\Facades\Validator;
class UserController extends Controller{
    protected $redirectTo = RouteServiceProvider::HOME;
    public function __construct(){
      $this->apiToken=uniqid(base64_encode(Str::random(40)));      
    }
    public function register(Request $request){
     $validator=Validator::make($request->all(),[
          'name'=>'required',
          'email'=>'required|email',
          'password'=>'required|min:6',
          'confirmPassword'=>'required',
          'role'=>'required'
      ]);
      if($validator->fails()){
        return response()->json([
          'status'=>'error',
          'error'=>$validator->errors()
        ]);
      }else{
        $postArray=$request->all();
         $postArray['password']=bcrypt($postArray['password']);
        $users=User::create($postArray);
        $success['token']=$this->apiToken;
        $success['name']=$users->name;
        $success['role']=$users->role;
        return response()->json([
          'status'=>'success',
          'data'=>$success
        ]);
      }
    }

   public function doLogin(Request $request){
    $request->validate([
      'email' => 'required',
      'password' => 'required',
     ]);
     if (Auth::attempt(['email' => $request['email'], 'password' => $request['password']])) {
      $user=Auth::user();
      $success['token']=$this->apiToken;
      $success['name']=$user->name;
      $success['role']=$user->role;
        return response()->json([
            'status'=>'success',
            'data'=>$success
         ]);
      }else{
        return response()->json([
          'status'=>'error',
          'data'=>'unauthorized Access'
        ]);
      }
    }

    public function getCurrentUser(){
        $user=auth()->user();
       return response()->json([
        'data'=>$user
       ]);
    }


}

