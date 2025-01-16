<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnass_adherent_site extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "nom", "prenom", "nom_ar", "prenom_ar", "code", "NNI","date_naiss", "cnass_statut_matri_id", "centrale_civilite_id", "centrale_identite_id", "adresse", "centrale_lvc_liste_id", "centrale_socio_professionnelles_id",
        "tel", "email", 'nb_person', "centrale_moughata_id", "centrale_commune_id", "centrale_etat_id", "centrale_wilaya_id", "created_at", 'user_id', 'photo', 'fichier'
    ];

    public function centrale_etat(){
        return $this->belongsTo(Centrale_etat::class);
    }

    public function centrale_identite(){
        return $this->belongsTo(Centrale_identite::class);
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

    public function centrale_lvc_liste(){
        return $this->belongsTo(Centrale_lvc_liste::class);
    }

    public function centrale_socio_professionnelles(){
        return $this->belongsTo(Centrale_socio_professionnelles::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function cnass_adherent_benef_sites(){
        return $this->hasMany(Cnass_adherent_benef_site::class);
    }

    public function centrale_civilite(){
        return $this->belongsTo(Centrale_civilite::class);
    }

    public function cnass_paiement_sites(){
        return $this->hasMany(Cnass_paiement_site::class);
    }

    public function cnass_titre_recettes(){
        return $this->hasMany(Cnass_titre_recette::class);
    }
    public function cnass_statut_matri(){
        return $this->belongsTo(Cnass_statut_matri::class);
    }
}
