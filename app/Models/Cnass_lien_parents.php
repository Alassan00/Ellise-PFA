<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnass_lien_parents extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "libelle", "libelle_ar", "created_at"
        
    ];

    public function cnass_adherent_benef_sites(){
        return $this->hasMany(Cnass_adherent_benef_site::class);
    }
}
