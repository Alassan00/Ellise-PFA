<?php

namespace App\Http\Controllers;

use App\Models\Centrale_civilite;
use Illuminate\Http\Request;

class CentraleCiviliteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_civilite::all();
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
    public function show(Centrale_civilite $centrale_civilite)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Centrale_civilite $centrale_civilite)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Centrale_civilite $centrale_civilite)
    {
        //
    }
}
