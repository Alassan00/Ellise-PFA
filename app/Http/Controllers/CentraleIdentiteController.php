<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCentrale_identiteRequest;
use App\Http\Requests\UpdateCentrale_identiteRequest;
use App\Models\Centrale_identite;
use Illuminate\Http\Request;

class CentraleIdentiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_identite::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50', 
    //         'code'=>'required|max:15', 
    //         "centrale_etat_id" =>'required',
    //     ]);

    //     $identite=Centrale_identite::create($data);
    //     return ['identite' => $identite];
    // }

    /**
     * Display the specified resource.
     */
    // public function show(Centrale_identite $identite)
    // {
    //     return $identite;
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Centrale_identite $identite)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50', 
    //         'code'=>'required|max:15', 
    //         "centrale_etat_id" =>'required',
    //     ]);

    //     $identite->update($data);
    //     return $identite;
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Centrale_identite $identite)
    // {
    //     $identite->delete();
    //     return ['message' => 'Supprimer avec succés'];
    // }
}
