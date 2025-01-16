<?php

namespace App\Policies;

use App\Models\Cnass_adherent_site;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class MyPolicy
{
    /**
     * Create a new policy instance.
     */
    public function modify(User $user, Cnass_adherent_site $cnass_adherent_site)
    {
        return $user->id === $cnass_adherent_site->user_id
        ? Response::allow()
        : Response::deny("vous n'avez pas la permission");
    }
}
