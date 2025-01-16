<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCnass_adherent_benef_siteRequest;
use App\Http\Requests\UpdateCnass_adherent_benef_siteRequest;
use App\Models\Cnass_adherent_benef_site;
use App\Models\Cnass_adherent_site;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;

class CnassAdherentBenefSiteController extends Controller implements HasMiddleware
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
    $adherents = $user->cnass_adherent_sites; 

    if ($adherents->isEmpty()) {
        return response()->json(['error' => 'No adherents found'], 404);
    }

    $adherentIds = $adherents->pluck('id');
    $beneficiaries = Cnass_adherent_benef_site::whereIn('cnass_adherent_site_id', $adherentIds)
        ->with('centrale_civilite', 'cnass_adherent_site', 'cnass_lien_parents', 'cnass_statut_matri', 'centrale_identite')
        ->latest()
        ->get();

    return response()->json($beneficiaries);

    // return Cnass_adherent_benef_site::where('cnass_adherent_site_id', $adherents->id)
    //     ->with('cnass_adherent_sites', 'centrale_civilite', 'cnass_lien_parents', 'cnass_statut_matri', 'centrale_identite')
    //     ->latest()
    //     ->get();
}

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $data = $request->validate([
    //         'persons' => 'required|array',
    //         'persons.*.nom' => 'required|string|max:50',
    //         'persons.*.prenom' => 'required|string|max:50',
    //         'persons.*.nom_ar' => 'string|max:50',
    //         'persons.*.prenom_ar' => 'string|max:50',
    //         'persons.*.NNI' => 'required|numeric',
    //         'persons.*.date_naiss' => 'required|date',
    //         'persons.*.centrale_civilite_id' => 'required',
    //         "persons.*.cnass_statut_matri_id" => 'required' ,
    //         'persons.*.cnass_lien_parents_id' => 'required',
    //         'persons.*.centrale_identite_id' => 'required',
    //         'persons.*.adresse' => 'required|string|max:55',
    //         'persons.*.photo',
    //         'persons.*.fichier',
    //         'cnass_adherent_site_id' => 'exists:cnass_adherent_sites,id'
    //     ]);
    
    //     $cnass_adherent_sites = Cnass_adherent_site::find($request->cnass_adherent_site_id);

    //     if (!$cnass_adherent_sites) {
    //         return response()->json(['error' => 'Adherent not found'], 404);
    //     }
    //     foreach ($data['persons'] as $person) {
    //         $adherent_benef= $cnass_adherent_sites->cnass_adherent_benef_sites()->create($person);
    //     }
    //     return ['adherent_benef' => $adherent_benef, 'centrale_identite' => $adherent_benef->centrale_identite, 'cnass_lien_parents' => $adherent_benef->cnass_lien_parents, 'cnass_statut_matri' => $adherent_benef->cnass_statut_matri, 'centrale_civilite' => $adherent_benef->centrale_civilite, 'cnass_adherent_sites' => $adherent_benef->cnass_adherent_sites];
    // }

    public function store(Request $request)
    {
        $data = $request->validate([
            'persons' => 'required|array',
            'persons.*.nom' => 'required|string|max:50',
            'persons.*.prenom' => 'required|string|max:50',
            'persons.*.nom_ar' => 'string|max:50',
            'persons.*.prenom_ar' => 'string|max:50',
            'persons.*.NNI' => 'required|numeric',
            'persons.*.date_naiss' => 'required|date',
            'persons.*.centrale_civilite_id' => 'required',
            "persons.*.cnass_statut_matri_id" => 'required' ,
            'persons.*.cnass_lien_parents_id' => 'required',
            'persons.*.centrale_identite_id' => 'required',
            'persons.*.adresse' => 'required|string|max:55',
            // Add validation for the files
            // "persons.*.photo" => 'required|image|mimes:jpeg,png,jpg|max:2048',  // Max size of 2MB
            // "persons.*.fichier" => 'required|image|mimes:jpeg,png,jpg|max:2048', // Another image file
        ]);
    
        // // Handle photo upload
        // if ($request->hasFile('photo')) {
        //     $photoPath = $request->file('photo')->store('photos', 'public');  // Save to storage/app/public/photos
        //     $data['photo'] = $photoPath;  // Store the path to save in the database
        // }
    
        // // Handle file image upload
        // if ($request->hasFile('fichier')) {
        //     $fileImagePath = $request->file('fichier')->store('files', 'public');  // Save to storage/app/public/files
        //     $data['fichier'] = $fileImagePath;  // Store the path to save in the database
        // }
    
        foreach ($data['persons'] as $person) {
            $person['user_id'] = Auth::user()->id;  
            $adherent_benef= $request->user()->cnass_adherent_sites()->first()->cnass_adherent_benef_sites()->create($person);
        }
        return ['adherent_benef' => $adherent_benef, 'centrale_identite' => $adherent_benef->centrale_identite, 'cnass_lien_parents' => $adherent_benef->cnass_lien_parents, 'cnass_statut_matri' => $adherent_benef->cnass_statut_matri, 'centrale_civilite' => $adherent_benef->centrale_civilite, 'user' => $adherent_benef->user];
    }

    /**
     * Display the specified resource.
     */
    public function show(Cnass_adherent_benef_site $adherent_benef)
    {
        return $adherent_benef;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cnass_adherent_benef_site $adherent_benef)
    {
        $data = $request->validate([
            'persons' => 'required|array',
            'persons.*.nom' => 'required|string|max:50',
            'persons.*.prenom' => 'required|string|max:50',
            'persons.*.nom_ar' => 'string|max:50',
            'persons.*.prenom_ar' => 'string|max:50',
            'persons.*.NNI' => 'required|numeric',
            'persons.*.date_naiss' => 'required|date',
            'persons.*.centrale_civilite_id' => 'required',
            "persons.*.cnass_statut_matri_id" => 'required' ,
            'persons.*.cnass_lien_parents_id' => 'required',
            'persons.*.centrale_identite_id' => 'required',
            'persons.*.adresse' => 'required|string|max:55',
            'persons.*.photo',
            'persons.*.fichier',
        ]);
    
        foreach ($data['persons'] as $person) {
            $person['user_id'] = Auth::user()->id;
            $adherent_benef->update($person);
        }
        return ['adherent_benef' => $adherent_benef, 'centrale_identite' => $adherent_benef->centrale_identite, 'cnass_lien_parents' => $adherent_benef->cnass_lien_parents, 'cnass_statut_matri' => $adherent_benef->cnass_statut_matri, 'centrale_civilite' => $adherent_benef->centrale_civilite, 'user' => $adherent_benef->user];
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cnass_adherent_benef_site $adherent_benef)
    {
        $adherent_benef->delete();
        return ['message' => 'Supprimeravec succés'];
    }
}
