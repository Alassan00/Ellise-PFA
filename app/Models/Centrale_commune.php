<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Centrale_commune extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "libelle", "centrale_moughata_id", "code", "created_at",
    ];

    public function centrale_moughata(){
        return $this->belongsTo(Centrale_moughata::class);
    }

    public function cnass_adherent_sites(){
        return $this->hasMany(Cnass_adherent_site::class);
    }

    public function cnass_adherent_benef_sites(){
        return $this->hasMany(Cnass_adherent_benef_site::class);
    }


    public function centrale_lvc_listes(){
        return $this->hasMany(Centrale_lvc_liste::class);
    }
}
