<?php

namespace App\Http\Controllers;

use App\Models\Centrale_profil;
use Illuminate\Http\Request;

class CentraleProfilController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_profil::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Centrale_profil $centrale_profil)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Centrale_profil $centrale_profil)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Centrale_profil $centrale_profil)
    {
        //
    }
}
