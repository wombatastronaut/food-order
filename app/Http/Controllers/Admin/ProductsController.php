<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function store()
    {
        Product::create([
            'name' => request('name'),
            'category_id' => request('category'),
            'description' => request('description'),
            'quantity' => request('quantity'),
            'price' => request('price')
        ]);
    }
}
