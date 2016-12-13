<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Sites extends Eloquent
{
    protected $collection = 'sites';
    protected $primaryKey = '_id';
}
