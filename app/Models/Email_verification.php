<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Email_verification extends Model
{
    use HasFactory, SoftDeletes, Notifiable;

    protected $fillable = [
        'code_verification',
        'email',
        'created_at',
    ];
}
