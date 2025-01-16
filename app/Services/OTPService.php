<?php

namespace App\Services;

use Twilio\Rest\Client;

class OTPService
{
    protected $twilio;

    public function __construct()
    {
        $this->twilio = new Client(env('TWILIO_SID'), env('TWILIO_AUTH_TOKEN'));
    }

    // Fonction pour générer un code OTP aléatoire
    public function generateOTP($length = 6)
    {
        return rand(100000, 999999); // Vous pouvez ajuster la longueur si nécessaire
    }

    // Fonction pour envoyer le code OTP par SMS
    public function sendOTP($phoneNumber, $otpCode)
    {
        $message = "Votre code OTP est : $otpCode";

        $this->twilio->messages->create(
            $phoneNumber, // Numéro de téléphone du destinataire
            [
                'from' => env('TWILIO_PHONE_NUMBER'), // Numéro Twilio
                'body' => $message,
            ]
        );
    }
}
