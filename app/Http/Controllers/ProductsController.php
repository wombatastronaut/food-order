<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductsController extends Controller
{
    public function index()
    {
        $category = request('category');

        return Product::selectRaw('
                            id,
                            CONCAT(UPPER(LEFT(name, 1)), SUBSTRING(name, 2)) AS name,
                            category_id,
                            description,
                            image,
                            price
                        ')
                        ->when($category, function($query, $category) {
                            return $query->where('category_id', $category);
                        })
                        ->paginate(6);
    }
}
