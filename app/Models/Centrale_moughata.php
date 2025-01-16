<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Centrale_moughata extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "libelle", "libelle_ar", "code", "centrale_wilaya_id", "created_at", 
    ];

    public function centrale_wilaya(){
        return $this->belongsTo(Centrale_wilaya::class);
    }

    public function centrale_commune(){
        return $this->hasMany(Centrale_commune::class);
    }

    public function cnass_adherent_sites(){
        return $this->hasMany(Cnass_adherent_site::class);
    }

    public function cnass_adherent_benef_sites(){
        return $this->hasMany(Cnass_adherent_benef_site::class);
    }
}
