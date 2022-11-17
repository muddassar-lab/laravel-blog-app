<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->realText(30),
            'likes' => fake()->numberBetween(1),
            'comments' => fake()->numberBetween(1),
            'description' => fake()->realText(400),
            'status' => fake()->randomElement(['active', 'inactive']),
            'author_id' => User::factory(),
            'category_id' => Category::factory(),
        ];
    }
}