<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCentrale_moughataRequest;
use App\Http\Requests\UpdateCentrale_moughataRequest;
use App\Models\Centrale_moughata;
use Illuminate\Http\Request;

class CentraleMoughataController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_moughata::all();
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
    //         'centrale_wilaya_id'=>'required',
    //     ]);

    //     $moughata=Centrale_moughata::create($data);
    //     return ['moughata' => $moughata];
    // }

    /**
     * Display the specified resource.
     */
    // public function show(Centrale_moughata $moughata)
    // {
    //     return $moughata;
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Centrale_moughata $moughata)
    // {
    //     $data = $request->validate([
    //         'libelle'=>'required|string|max:50',
    //         'libelle_ar'=>'required|string|max:50',
    //         'code'=>'required|max:15',
    //         'centrale_wilaya_id'=>'required',
    //     ]);

    //     $moughata->update($data);
    //     return $moughata;
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Centrale_moughata $moughata)
    // {
    //     $moughata->delete();
    //     return ['message' => 'Supprimer avec succés'];
    // }
}
