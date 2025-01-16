<?php

namespace App\Http\Controllers;

use App\Models\Cnass_lien_parents;
use Illuminate\Http\Request;

class CnassLienParentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Cnass_lien_parents::all();
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
    public function show(Cnass_lien_parents $cnass_lien_parents)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cnass_lien_parents $cnass_lien_parents)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cnass_lien_parents $cnass_lien_parents)
    {
        //
    }
}
