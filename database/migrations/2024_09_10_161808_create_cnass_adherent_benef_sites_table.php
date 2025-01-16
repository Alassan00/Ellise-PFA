<?php

use App\Models\Centrale_civilite;
use App\Models\Centrale_commune;
use App\Models\Centrale_identite;
use App\Models\Centrale_lvc_liste;
use App\Models\Centrale_moughata;
use App\Models\Centrale_socio_professionnelles;
use App\Models\Centrale_wilaya;
use App\Models\Cnass_adherent_site;
use App\Models\Cnass_lien_parents;
use App\Models\Cnass_statut_matri;
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
        Schema::create('cnass_adherent_benef_sites', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('code',30)->nullable();
            $table->string('NNI',10)->unique();
            $table->date('date_naiss')->nullable();
            $table->foreignIdFor(Centrale_civilite::class)->nullable()->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Centrale_identite::class)->nullable()->constrained()->cascadeOnDelete();
            //$table->foreignIdFor(Centrale_socio_professionnelles::class)->constrained()->cascadeOnDelete();
            $table->text('adresse')->nullable();
            $table->string('tel',13)->nullable()->unique();
            $table->string('email', 60)->nullable()->unique()->nullable();
            $table->foreignIdFor(User::class)->nullable()->constrained()->cascadeOnDelete();
            //$table->foreignIdFor(Centrale_wilaya::class)->nullable()->constrained()->cascadeOnDelete();
            //$table->foreignIdFor(Centrale_moughata::class)->nullable()->constrained()->cascadeOnDelete();
            //$table->foreignIdFor(Centrale_commune::class)->nullable()->constrained()->cascadeOnDelete();
            //$table->foreignIdFor(Centrale_lvc_liste::class)->nullable()->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Cnass_statut_matri::class)->nullable()->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Cnass_lien_parents::class)->nullable()->constrained()->cascadeOnDelete();
            $table->string('photo')->nullable();
            $table->string('fichier')->nullable();
            $table->string('nom_ar')->nullable();
            $table->string('prenom_ar')->nullable();
            $table->foreignIdFor(Cnass_adherent_site::class)->nullable()->constrained()->cascadeOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cnass_adherent_benef_sites');
    }
};
