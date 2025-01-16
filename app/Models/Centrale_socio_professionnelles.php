<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Centrale_socio_professionnelles extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "libelle", "code", "centrale_etat_id", "created_at"
    ];

    public function centrale_etat(){
        return $this->belongsTo(Centrale_etat::class);
    }

    public function cnass_adherent_sites(){
        return $this->hasMany(Cnass_adherent_site::class);
    }

    public function cnass_adherent_benef_sites(){
        return $this->hasMany(Cnass_adherent_benef_site::class);
    }
}
