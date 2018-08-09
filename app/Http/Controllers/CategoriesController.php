<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoriesController extends Controller
{
    public function index(){
        return Category::selectRaw('
                            id,
                            CONCAT(UPPER(LEFT(name, 1)), SUBSTRING(name, 2)) AS name,
                            description
                        ')
                        ->get();
    }
}
