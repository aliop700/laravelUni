<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    //
    public function universities()
    {
        return $this->hasMany('App\University','country_id');
    }
}
