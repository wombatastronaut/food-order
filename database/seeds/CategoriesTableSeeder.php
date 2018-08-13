<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Burgers',
                'description' => 'This is a sample description'
            ],
            [
                'name' => 'Beverages',
                'description' => 'This is a sample description'
            ],
            [
                'name' => 'Combo Meals',
                'description' => 'This is a sample description'
            ]
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'name' => $category['name'],
                'description' => $category['description']
            ]);
        }
    }
}
