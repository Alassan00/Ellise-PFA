<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'tel' => $this->tel,
            'adresse' => $this->adresse,
            'status' => $this->status,
            'email' => $this->email,
            'created_at' => $this->created_at->$request->format('Y-m-d H:i:s'),
        ];
    }
}
