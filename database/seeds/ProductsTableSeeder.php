<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => 'Hot Dog',
                'category_id' => 1,
                'description' => 'This is a sample description',
                'price' => 50,
                'quantity' => 100
            ],
            [
                'name' => 'Cheese Burger',
                'category_id' => 1,
                'description' => 'This is a sample description',
                'price' => 100,
                'quantity' => 100
            ],
            [
                'name' => 'Fries',
                'category_id' => 1,
                'description' => 'This is a sample description',
                'price' => 70,
                'quantity' => 100
            ]
        ];

        foreach ($products as $product) {
            DB::table('products')->insert([
                'name' => $product['name'],
                'category_id' => $product['category_id'],
                'description' => $product['description'],
                'price' => $product['price'],
                'quantity' => $product['quantity'],
            ]);
        }
    }
}
