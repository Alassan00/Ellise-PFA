<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\CentraleBanqueController;
use App\Http\Controllers\CentraleCiviliteController;
use App\Http\Controllers\CentraleCommuneController;
use App\Http\Controllers\CentraleEtatController;
use App\Http\Controllers\CentraleIdentiteController;
use App\Http\Controllers\CentraleLvcListeController;
use App\Http\Controllers\CentraleMoughataController;
use App\Http\Controllers\CentraleProfilController;
use App\Http\Controllers\CentraleSocioProfessionnellesController;
use App\Http\Controllers\CentraleWilayaController;
use App\Http\Controllers\CnassAdherentBenefSiteController;
use App\Http\Controllers\CnassAdherentSiteController;
use App\Http\Controllers\CnassContactController;
use App\Http\Controllers\CnassLienParentsController;
use App\Http\Controllers\CnassPaiementSiteController;
use App\Http\Controllers\CnassStatutMatriController;
use App\Http\Controllers\OTPController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:sanctum');

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class,'logout'])->middleware('auth:sanctum');
// Route::get('/user', [AuthController::class, 'show'])->middleware('auth:sanctum');
// Route::put('/user', [AuthController::class, 'update'])->middleware('auth:sanctum');



// Correct routes
Route::get('/verification/{id}', [AuthController::class, 'verification']);
Route::post('/verifie_code', [AuthController::class, 'verifiedCode']); // Should be POST
Route::post('/renvoie_code', [AuthController::class, 'resendCode']); // Should be POST


Route::apiResource('banque', CentraleBanqueController::class);
Route::apiResource('commune', CentraleCommuneController::class);
Route::apiResource('etat', CentraleEtatController::class);
Route::apiResource('identite', CentraleIdentiteController::class);
Route::apiResource('moughata', CentraleMoughataController::class);
Route::apiResource('wilaya', CentraleWilayaController::class);
Route::apiResource('adherent_benefs', CnassAdherentBenefSiteController::class);
Route::apiResource('adherents', CnassAdherentSiteController::class);
Route::apiResource('civilite', CentraleCiviliteController::class);
Route::apiResource('statut_matri', CnassStatutMatriController::class);
Route::apiResource('contact', CnassContactController::class);
Route::apiResource('socio_proff', CentraleSocioProfessionnellesController::class);
Route::apiResource('quartier', CentraleLvcListeController::class);
Route::apiResource('liens_parente', CnassLienParentsController::class);
Route::apiResource('paiement', CnassPaiementSiteController::class);
Route::apiResource('profile', CentraleProfilController::class);
