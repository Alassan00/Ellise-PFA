<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnass_adherent_benef_site extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "nom", "prenom", "nom_ar", "prenom_ar", "code", "NNI","date_naiss", "centrale_civilite_id", "centrale_identite_id", "cnass_adherent_site_id", "adresse",
         "cnass_statut_matri_id", "cnass_lien_parents_id", "created_at", "photo", "fichier"
    ];

    public function centrale_identite(){
        return $this->belongsTo(Centrale_identite::class);
    }
    public function cnass_statut_matri(){
        return $this->belongsTo(Cnass_statut_matri::class);
    }

    public function cnass_lien_parents(){
        return $this->belongsTo(Cnass_lien_parents::class);
    }

    public function centrale_moughata(){
        return $this->belongsTo(Centrale_moughata::class);
    }

    public function centrale_commune(){
        return $this->belongsTo(Centrale_commune::class);
    }

    public function centrale_wilaya(){
        return $this->belongsTo(Centrale_wilaya::class);
    }

    public function cnass_adherent_site(){
        return $this->belongsTo(Cnass_adherent_site::class);
    }
    public function centrale_civilite(){
        return $this->belongsTo(Centrale_civilite::class);
    }

}
