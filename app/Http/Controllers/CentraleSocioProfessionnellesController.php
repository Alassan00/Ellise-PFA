<?php

namespace App\Http\Controllers;

use App\Models\Centrale_socio_professionnelles;
use Illuminate\Http\Request;

class CentraleSocioProfessionnellesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_socio_professionnelles::all();
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
    public function show(centrale_socio_professionnelles $centrale_socio_professionnelles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, centrale_socio_professionnelles $centrale_socio_professionnelles)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(centrale_socio_professionnelles $centrale_socio_professionnelles)
    {
        //
    }
}
