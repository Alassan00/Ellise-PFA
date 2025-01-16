<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCentrale_communeRequest;
use App\Http\Requests\UpdateCentrale_communeRequest;
use App\Models\Centrale_commune;
use Illuminate\Http\Request;

class CentraleCommuneController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_commune::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50', 
    //         'centrale_moughata_id'=>'required', 
    //         'code'=>'required|max:15', 
    //     ]);

    //     $commune=Centrale_commune::create($data);
    //     return ['commune' => $commune];
    // }

    /**
     * Display the specified resource.
     */
    // public function show(Centrale_commune $commune)
    // {
    //     return $commune;
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Centrale_commune $commune)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50', 
    //         'centrale_moughata_id'=>'required', 
    //         'code'=>'required|max:15', 
    //     ]);

    //     $commune->update($data);
    //     return $commune;
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Centrale_commune $commune)
    // {
    //     $commune->delete();
    //     return ['message' => 'Supprimer avec succés'];
    // }
}
