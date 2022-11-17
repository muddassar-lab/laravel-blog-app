<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use COM;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::factory()->has(Post::factory()->count(5))->count(5)->create();
    }
}