<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Centrale_wilaya extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "libelle", "libelle_ar", "code", "created_at", 
    ];

    public function moughata(){
        return $this->hasMany(Centrale_moughata::class);
    }

    public function cnass_adherent_sites(){
        return $this->hasMany(Cnass_adherent_site::class);
    }

    public function cnass_adherent_benef_sites(){
        return $this->hasMany(Cnass_adherent_benef_site::class);
    }
}
