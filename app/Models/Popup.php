<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Popup extends Model
{
    use HasFactory;
    protected $fillable = [
        'popup_id',
        'title',
        'background',
        'placeholder',
        'button_text',
        'footnote',       
        'badgecolor',
        'el_order'       
    ];
}
