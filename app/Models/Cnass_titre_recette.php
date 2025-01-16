<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnass_titre_recette extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "recu", "num_seq", "num_convert", "montant", "mode_paiement", "transfert_code", "fichier", "code", "cnass_adherent_site_id", "user_id", "created_at"
    ];

    public function cnass_adherent_site(){
        return $this->belongsTo(Cnass_adherent_site::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

}