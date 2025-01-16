<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Centrale_etat extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "code", "libelle", "created_at",
    ];

    public function centrale_identites(){
        return $this->hasMany(Centrale_identite::class);
    }

    public function cnass_adherent_sites(){
        return $this->hasMany(Cnass_adherent_site::class);
    }
    public function centrale_socio_professionnelles(){
        return $this->hasMany(centrale_socio_professionnelles::class);
    }
}
