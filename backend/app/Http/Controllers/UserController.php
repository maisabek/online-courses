<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
// use JWTAuth;
use Illuminate\Support\Facades\Validator;
class UserController extends Controller{
    protected $redirectTo = RouteServiceProvider::HOME;
    public function __construct(){
      $this->apiToken=uniqid(base64_encode(Str::random(60)));
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
     $credentials=$request->only('email','password');
     if (Auth::attempt($credentials)) {
      $user=Auth::user();
      $success['token']=$this->apiToken;
      //JWTAuth::fromUser($user,$request->all());
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
       return response()->json([
        'data'=>auth()->user()
       ]);
    }

    public function logout(){
       auth()->logout();
       return response()->json(['message'=>'User successfully logged out']);
    }


}

