<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    public function university(){
        return $this->belongsTo('App\University','university_id');
    }
    
}
