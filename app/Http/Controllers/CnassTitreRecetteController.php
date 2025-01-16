<?php

namespace App\Http\Controllers;

use App\Models\Cnass_titre_recette;
use Illuminate\Http\Request;

class CnassTitreRecetteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Cnass_titre_recette::all();
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
    public function show(Cnass_titre_recette $cnass_titre_recette)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cnass_titre_recette $cnass_titre_recette)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cnass_titre_recette $cnass_titre_recette)
    {
        //
    }
}
