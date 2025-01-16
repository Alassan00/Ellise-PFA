<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCentrale_wilayaRequest;
use App\Http\Requests\UpdateCentrale_wilayaRequest;
use App\Models\Centrale_wilaya;
use Illuminate\Http\Request;

class CentraleWilayaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_wilaya::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50', 
    //         'libelle_ar'=>'required|string|max:50', 
    //         'code'=>'required|max:15', 
    //     ]);

    //     $wilaya=Centrale_wilaya::create($data);
    //     return ['wilaya' => $wilaya];
    // }

    /**
     * Display the specified resource.
     */
    // public function show(Centrale_wilaya $wilaya)
    // {
    //     return $wilaya;
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Centrale_wilaya $wilaya)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50', 
    //         'libelle_ar'=>'required|string|max:50', 
    //         'code'=>'required|max:15', 
    //     ]);

    //     $wilaya->update($data);
    //     return $wilaya;
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Centrale_wilaya $wilaya)
    // {
    //      $wilaya->delete();
    //      return ['message' => 'Supprimer avec succés'];
    // }
}
