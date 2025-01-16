<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCentrale_banqueRequest;
use App\Http\Requests\UpdateCentrale_banqueRequest;
use App\Models\Centrale_banque;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class CentraleBanqueController extends Controller implements HasMiddleware
{

    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['show', 'index'])
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Centrale_banque::with('user')->get();
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $data = $request->validate([
    //     'libelle'=> 'required|string|max:50', 
    //     'libelle_ar' => 'required|string|max:50', 
    //     'code' => 'required|max:15',
    //     ]);

    //     $banque = $request->user()->banques()->create($data);
    //     return ['banque' => $banque, 'user' => $banque->user];
    // }

    /**
     * Display the specified resource.
     */
    // public function show(Centrale_banque $banque)
    // {
        
    //     return ['banque' => $banque, 'user' => $banque->user];
    // }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, Centrale_banque $banque)
    // {
    //     $data = $request->validate([
    //         'libelle'=> 'required|string|max:50', 
    //         'libelle_ar' => 'required|string|max:50', 
    //         'code' => 'required|max:15', 
    //         'user_id' => 'required', 
    //         ]);
    
    //         $banque->update($data);
            
    //     return ['banque' => $banque, 'user' => $banque->user];
    // }

    /**
     * Remove the specified resource from storage.
     */
    // public function destroy(Centrale_banque $banque)
    // {
    //     $banque->delete();
    //     return ['message' => 'Supprimer avec succés'];
    // }
}
