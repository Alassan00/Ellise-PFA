<?php

use App\Models\Centrale_etat;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('centrale_identites', function (Blueprint $table) {
            $table->id();
            $table->string('libelle');
            $table->string('code',30)->nullable();
            $table->foreignIdFor(Centrale_etat::class)->constrained()->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('centrale_identites');
    }
};
