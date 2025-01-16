<?php

namespace App\Http\Controllers;

use App\Models\Centrale_lvc_liste;
use Illuminate\Http\Request;

class CentraleLvcListeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_lvc_liste::all();
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
    public function show(Centrale_lvc_liste $centrale_lvc_liste)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Centrale_lvc_liste $centrale_lvc_liste)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Centrale_lvc_liste $centrale_lvc_liste)
    {
        //
    }
}
