<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Darryldecode\Cart\CartCondition;

class CartController extends Controller
{
    public function store()
    {
        // \Cart::session(1)->add(array(
        //     'id' => 456,
        //     'name' => 'Sample Item',
        //     'price' => 67.99,
        //     'quantity' => 4,
        //     'attributes' => array()
        // ));

        echo "<pre>";
        print_r(\Cart::session(1)->getContent()->toArray());
        die;
    }
}
