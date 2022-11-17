<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'likes',
        'comments',
        'description',
        'category_id',
        'author_id'
    ];

    //relations
    public function user()
    {
        $this->belongsTo(User::class);
    }
    public function category()
    {
        $this->belongsTo(Category::class);
    }

}