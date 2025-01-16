<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cnass_contact extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "code", "objet", "message", "user_id", "created_at"
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
