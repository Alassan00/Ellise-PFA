<?php

namespace App\Http\Controllers;

use App\Models\Cnass_contact;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;

class CnassContactController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum', except: ['show'])
        ];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        return Cnass_contact::where('user_id', $user->id)->with('user')->latest()->paginate(5);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'objet' => 'required|string',
            'message' => 'required|string',
            'user_id' =>'numeric'
        ]);

        $data['user_id'] = Auth::id();
        $contact = $request->user()->cnass_contacts()->create($data);
        return ['contact' => $contact, 'user' => $contact->user];
    }

    /**
     * Display the specified resource.
     */
    public function show(Cnass_contact $cnass_contact)
    {
        return $cnass_contact;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cnass_contact $cnass_contact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cnass_contact $cnass_contact)
    {
        //
    }
}
