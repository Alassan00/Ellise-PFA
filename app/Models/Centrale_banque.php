<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Centrale_banque extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "libelle", "libelle_ar", "code", "user_id", "created_at"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
