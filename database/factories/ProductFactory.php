<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Product::class, function (Faker $faker) use ($factory) {
     return [
        'name' => $faker->word,
        'category_id' => $factory->create(App\Category::class)->id,
        'description' => $faker->text,
        'quantity' => 100,
        'price' => 500,
    ];
});
