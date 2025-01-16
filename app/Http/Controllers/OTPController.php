<?php

namespace App\Http\Controllers;

use App\Services\OTPService;
use Illuminate\Http\Request;

class OTPController extends Controller
{
    protected $otpService;

    public function __construct(OTPService $otpService)
    {
        $this->otpService = $otpService;
    }

    // Fonction pour envoyer un OTP
    public function sendOTP(Request $request)
    {
        // Validation du numéro de téléphone
        $request->validate([
            'tel' => 'required|numeric',
        ]);

        // Générer l'OTP
        $otp = $this->otpService->generateOTP();

        // Envoyer l'OTP par SMS
        $this->otpService->sendOTP($request->tel, $otp);

        // Enregistrer l'OTP dans la session ou la base de données pour validation ultérieure
        session(['otp' => $otp]);

        return response()->json(['message' => 'Code OTP envoyé avec succès']);
    }

    // Fonction pour valider l'OTP
    public function validateOTP(Request $request)
    {
        $request->validate([
            'otp' => 'required|numeric',
        ]);

        // Vérifier si l'OTP est correct
        if ($request->otp == session('otp')) {
            return response()->json(['message' => 'Code OTP validé avec succès']);
        }

        return response()->json(['message' => 'Code OTP invalide'], 422);
    }
}
