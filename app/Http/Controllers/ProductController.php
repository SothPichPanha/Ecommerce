<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
   public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string',
            'brand' => 'nullable|string',
            'description' => 'nullable|string',
            'image' => 'nullable|string',
            'price' => 'required|numeric',
            'quality' => 'nullable|string',
            'in_stock' => 'boolean'
        ]);

        $product = Product::create($validated);
        return response()->json(['message' => 'Product created', 'data' => $product]);
    }
}
