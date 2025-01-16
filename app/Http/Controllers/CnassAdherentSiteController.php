<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCnass_adherent_siteRequest;
use App\Http\Requests\UpdateCnass_adherent_siteRequest;
use App\Http\Resources\CnassAdherentSiteResource;
use App\Models\Cnass_adherent_site;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class CnassAdherentSiteController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['show'])
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        return Cnass_adherent_site::where('user_id', $user->id)->with('user',  'centrale_etat', 'centrale_civilite', 'cnass_statut_matri' ,'centrale_identite', 'centrale_socio_professionnelles', 'centrale_moughata', 'centrale_commune', 'centrale_wilaya')->latest()->paginate(8);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $data = $request->validate([
            "nom"=>'required|string|max:50',
            "prenom" =>'required|string|max:50',
            "nom_ar"=>'string|max:50',
            "prenom_ar" =>'string|max:50', 
            // "code"=>'required|max:30', 
            "NNI"=>'numeric|min:10',
            "date_naiss"=>'required|date',
            'centrale_identite_id'=>'required',
            "adresse"=>'required|string|max:55',
            "tel"=>'required|numeric|min:8',
            "email"=>'required|email',
            "nb_person"=>'required|numeric|min:0',
            "centrale_socio_professionnelles_id"=>'required',
            "centrale_moughata_id"=>'required',
            "centrale_commune_id"=>'required',
            "centrale_wilaya_id"=>'required',
            "centrale_civilite_id" => 'required' ,
            "centrale_lvc_liste_id" => 'required' ,
            "cnass_statut_matri_id" => 'required' ,
            "created_at"=>'date',
            // Add validation for the files
            // "photo" => 'required|image|mimes:jpeg,png,jpg|max:2048',  // Max size of 2MB
            // "fichier" => 'required|image|mimes:jpeg,png,jpg|max:2048', // Another image file
        ]);
    
        // Handle photo upload
        // if ($request->hasFile('photo')) {
        //     $photoPath = $request->file('photo')->store('photos', 'public');  // Save to storage/app/public/photos
        //     $data['photo'] = $photoPath;  // Store the path to save in the database
        // }
    
        // // Handle file image upload
        // if ($request->hasFile('fichier')) {
        //     $fileImagePath = $request->file('fichier')->store('files', 'public');  // Save to storage/app/public/files
        //     $data['fichier'] = $fileImagePath;  // Store the path to save in the database
        // }


        $adherent= $request->user()->cnass_adherent_sites()->create($data);
        return ['adherent' => $adherent, 'user' => $adherent->user,  'centrale_etat' => $adherent->centrale_etat,  'cnass_statut_matri' => $adherent->cnass_statut_matri, 'centrale_lvc_liste' => $adherent->centrale_lvc_liste, 'centrale_civilite' => $adherent->centrale_civilite, 'centrale_identite' => $adherent->centrale_identite, 'centrale_socio_professionnelles' => $adherent->centrale_socio_professionnelles, 'centrale_moughata' => $adherent->centrale_moughata, 'centrale_commune' => $adherent->centrale_commune, 'centrale_wilaya' => $adherent->centrale_wilaya];
    }

    /**
     * Display the specified resource.
     */
    public function show(Cnass_adherent_site $adherent)
    {
        return ['adherent' => $adherent, 'user' => $adherent->user,  'cnass_statut_matri' => $adherent->cnass_statut_matri, 'centrale_lvc_liste' => $adherent->centrale_lvc_liste, 'centrale_civilite' => $adherent->centrale_civilite, 'centrale_identite' => $adherent->centrale_identite, 'centrale_socio_professionnelles' => $adherent->centrale_socio_professionnelles, 'centrale_moughata' => $adherent->centrale_moughata, 'centrale_commune' => $adherent->centrale_commune, 'centrale_wilaya' => $adherent->centrale_wilaya];
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cnass_adherent_site $adherent)
    {
        // Gate::authorize('modify', $adherent);
        $data = $request->validate([
            "nom"=>'string|max:50',
            "prenom" =>'string|max:50',
            "nom_ar"=>'string|max:50',
            "prenom_ar" =>'string|max:50', 
            // "code"=>'max:30', 
            "NNI"=>'numeric|min:10',
            "date_naiss"=>'date',
            'centrale_identite_id',
            "adresse"=>'string|max:55',
            "tel"=>'numeric|min:8',
            "email"=>'email',
            "nb_person"=>'numeric|min:0',
            "centrale_socio_professionnelles_id",
            "centrale_moughata_id",
            "centrale_commune_id",
            "centrale_wilaya_id",
            "centrale_civilite_id",
            "centrale_lvc_liste_id",
            "cnass_statut_matri_id",
            "photo" => 'max:2048',  // Max size of 2MB
            "fichier" => 'max:2048', // Another image file
        ]);
    
        // Handle photo upload
        if ($request->hasFile('photo')) {
            $photoPath = $request->file('photo')->store('photos', 'public');  // Save to storage/app/public/photos
            $data['photo'] = $photoPath;  // Store the path to save in the database
        }
    
        // Handle file image upload
        if ($request->hasFile('fichier')) {
            $fileImagePath = $request->file('fichier')->store('files', 'public');  // Save to storage/app/public/files
            $data['fichier'] = $fileImagePath;  // Store the path to save in the database
        }

        $adherent->update($data);
        return ['adherent' => $adherent, 'user' => $adherent->user,  'cnass_statut_matri' => $adherent->cnass_statut_matri, 'centrale_lvc_liste' => $adherent->centrale_lvc_liste, 'centrale_civilite' => $adherent->centrale_civilite, 'centrale_identite' => $adherent->centrale_identite, 'centrale_socio_professionnelles' => $adherent->centrale_socio_professionnelles, 'centrale_moughata' => $adherent->centrale_moughata, 'centrale_commune' => $adherent->centrale_commune, 'centrale_wilaya' => $adherent->centrale_wilaya];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cnass_adherent_site $adherent)
    {
        Gate::authorize('modify', $adherent);
        $adherent->delete();
        return ['message' => 'supprimer avec succés'];
    }
}
