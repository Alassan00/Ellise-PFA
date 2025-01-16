<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCentrale_etatRequest;
use App\Http\Requests\UpdateCentrale_etatRequest;
use App\Models\Centrale_etat;
use Illuminate\Http\Request;

class CentraleEtatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_etat::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50', 
    //         'code'=>'required|max:15',
    //     ]);

    //     $etat=Centrale_etat::create($data);
    //     return ['etat' => $etat];
    // }

    /**
     * Display the specified resource.
     */
    // public function show(Centrale_etat $etat)
    // {
    //     return $etat;
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Centrale_etat $etat)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50', 
    //         'code'=>'required|max:15',
    //     ]);

    //     $etat->update($data);
    //     return $etat;
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Centrale_etat $etat)
    // {
    //     $etat->delete();
    //     return ['message' => 'Supprimer avec succés'];
    // }
}
