<?php

use App\Models\Centrale_wilaya;
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
        Schema::create('centrale_moughatas', function (Blueprint $table) {
            $table->id();
            $table->string('libelle');
            $table->string('code',30)->nullable();
            $table->foreignIdFor(Centrale_wilaya::class)->constrained()->cascadeOnDelete();
            $table->string('libelle_ar')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('centrale_moughatas');
    }
};
