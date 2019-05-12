<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    //
    public function country(){
        return $this->belongsTo('App\Country','country_id');
    }

    public function majors()
    {
        return $this->hasMany('App\Major','university_id');
    }
}
