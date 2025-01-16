<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnass_statut_matri extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "libelle", "created_at"
        
    ];

    public function cnass_adherent_benef_sites(){
        return $this->hasMany(Cnass_adherent_benef_site::class);
    }


    public function Cnass_adherent_sites(){
        return $this->hasMany(Cnass_adherent_site::class);
    }
}
