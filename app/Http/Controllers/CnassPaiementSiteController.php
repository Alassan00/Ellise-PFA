<?php

namespace App\Http\Controllers;

use App\Models\Cnass_paiement_site;
use Illuminate\Http\Request;

class CnassPaiementSiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Cnass_paiement_site::all();
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
    public function show(Cnass_paiement_site $cnass_paiement_site)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cnass_paiement_site $cnass_paiement_site)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cnass_paiement_site $cnass_paiement_site)
    {
        //
    }
}
