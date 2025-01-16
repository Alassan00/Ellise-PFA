<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\Email_verification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{

    public function signup(Request $request) {

         $data = $request->validate([
            'nom' => 'required|string',
            'tel' => 'required|numeric|min:8|unique:users',
            'NNI' => 'required|numeric|min:10|unique:users',
            'email' => 'required|email|unique:users',
            'adresse' => 'required|string',
            'status' => 'required|in:Financeur,Chef de famille',
            'password' => 'required|confirmed',
         ]);

         $user = User::create($data);
        //  $this->sendCode($user); 
         $token = $user->createToken($request->nom);
         return [
            'user' => $user,
            'token'=> $token->plainTextToken
         ];
   }

    public function login(Request $request)
    {
        $request->validate([
            'tel' => 'required|numeric|exists:users',
            'password' => 'required',
         ]);

         $user = User::where('tel', $request->tel)->first();

         if(!$user || !Hash::check($request->password, $user->password)){
            return ['errors' => [
               'tel' => ['']
            ]
         ];
         }

         $token = $user->createToken($user->nom);
         return [
            'user' => $user,
            'token'=> $token->plainTextToken
         ];
    }

    public function logout(Request $request){

        $request->user()->tokens()->delete();
        return ['message' => 'Vous êtes déconnecter avec succès'];
    }

    // public function show()
    // {
    //     $user = Auth::user(); // Get the authenticated user
    //     return ['user', $user]; // Return user data as JSON
    // }

    // // Method to update the authenticated user's information
    // public function update(Request $request)
    // {
    //     $user = $request->user(); // Get the authenticated user

    //     $data = $request->validate([
    //         'nom' => 'sometimes|string',
    //         'tel' => 'sometimes|numeric|min:8|unique:users,tel,' . $user->id,
    //         'NNI' => 'sometimes|numeric|min:10|unique:users,NNI,' . $user->id,
    //         'email' => 'sometimes|email|unique:users,email,' . $user->id,
    //         'adresse' => 'sometimes|string',
    //         'status' => 'sometimes|in:Financeur,Chef de famille',
    //         'password' => 'sometimes|required|confirmed',
    //     ]);

    //     $user->update($data); // Update user data
    //     return response()->json($user); // Return updated user data
    // }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------































//     public function sendValidationCode(Request $request)
// {
//     $email = $request->input('email');
//     $code = $request->input('code');
    
//     // Utilisez le service mail de Laravel pour envoyer l'email
//     Mail::to($email)->send(new ValidationCodeMail($code));

//     return response()->json(['message' => 'Code envoyé avec succès.']);
// }

public function updatePassword(Request $request)
{
    $request->validate([
        'currentPassword' => 'required',
        'newPassword' => 'required|confirmed', 
                // Password::min(8)->symbols()->numbers()->letters()->uncompromised()->mixedCase()
    ]);

    $user = $request->user();

    if (!Hash::check($request->currentPassword, $request->$user->password)) {
        return response()->json([
            'errors' => [
                'currentPassword' => ['Le mot de passe actuel est incorrect.']
            ]
        ], 422);
    }

    $user->password = Hash::make($request->newPassword);

    if($user->save()) {
        return response()->json([
            'success'=> 'Le mot de passe est mis à jour'], 200);
    } else {
        return response()->json([
            'errors'=> 'Une erreur est survenue'], 500);
    }
}





// For mail verification code
public function sendCode($user){
    $code = rand(1000,9999);
    $time = time();

    Email_verification::updateOrCreate(
        ['email' => $user->email],
        [
            'email' => $user->email,
            'code_verification' => $code,
            'created_at' => $time
        ]
    );
    $data['email'] = $user->email;
    $data['title'] = 'CNASS mail verification of user registration';
    $data['body'] = 'Votre code CNASS est : '.$code;

    Mail::html($data['body'], function($message) use ($data) {
        $message->to($data['email'])->subject($data['title']);
    });
}

public function verification($id){
    $user = User::where('id', $id)->first();
    if(!$user || $user->is_verified == 1){
        return redirect('/');
    }
    $email = $user->email;
    $this->sendCode($user);
    return $email;
}

public function verifiedCode(Request $request)
{
    $user = User::where('email', $request->email)->first();
    
    if (!$user) {
        return response()->json([
            'success' => false, 
            'message' => "Pas d'utilisateur"
        ]);
    }

    $codeData = Email_verification::where('email', $request->email)
                                  ->where('code_verification', $request->code)
                                  ->first();
    
    if (!$codeData) {
        return response()->json([
            'success' => false, 
            'message' => 'Code validation est invalide'
        ]);
    }

    // $currentTime = time();
    // $time = strtotime($codeData->created_at); 
    
    // if ($currentTime > $time + 90) {
    //     return response()->json([
    //         'success' => false, 
    //         'message' => 'Le code validation est expiré'
    //     ]);
    // }

    $user->is_verified = 1;
     $token = $user->createToken($request->nom);
    $user->save();

    return response()->json([
        'success' => true, 
        'message' => "L'Email est vérifié avec succés", 'token' => $token
    ]);
}


public function resendCode(Request $request){
    $user = User::where('email', $request->email)->first();
    $codeData = Email_verification::where('email', $request->email)->first();

    $currentTime = time();
    $time = $codeData->created_at;

    if($currentTime >= $time && $time >= $currentTime - (90+5)){
        return response()->json(['success' => false, 'msg' => "Veillez réessayer après quelque minutes"]);
    } else {
        $this->sendCode($user);
        return response()->json(['success' => true, 'msg' => "Le code a été envoyé"]);
    }
}





}


