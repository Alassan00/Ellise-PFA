<?php

use App\Models\Cnass_adherent_site;
use App\Models\User;
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
        Schema::create('cnass_paiement_sites', function (Blueprint $table) {
            $table->id();
            $table->string('recu')->nullable();
            $table->string('num_seq')->nullable();
            $table->string('num_convert')->nullable();
            $table->string('code')->nullable();
            $table->double('montant')->nullable();
            $table->string('mode_paiement')->nullable();
            $table->string('fichier')->nullable();
            $table->string('transfert_code')->nullable();
            $table->foreignIdFor(Cnass_adherent_site::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(User::class)->nullable()->constrained()->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cnass_paiement_sites');
    }
};
