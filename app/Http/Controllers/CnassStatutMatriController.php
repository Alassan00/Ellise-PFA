<?php

namespace App\Http\Controllers;

use App\Models\Cnass_statut_matri;
use Illuminate\Http\Request;

class CnassStatutMatriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Cnass_statut_matri::all();
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
    public function show(Cnass_statut_matri $cnass_statut_matri)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cnass_statut_matri $cnass_statut_matri)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cnass_statut_matri $cnass_statut_matri)
    {
        //
    }
}
