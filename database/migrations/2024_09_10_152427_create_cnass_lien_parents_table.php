<?php

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
        Schema::create('cnass_lien_parents', function (Blueprint $table) {
            $table->id();
            $table->string("libelle")->nullable();
            $table->string("libelle_ar")->nullable();
            $table->string("code")->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cnass_lien_parents');
    }
};
