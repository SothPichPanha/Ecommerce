<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'title',
        'brand',
        'description',
        'image',
        'price',
        'quality',
        'in_stock'
    ];
}
