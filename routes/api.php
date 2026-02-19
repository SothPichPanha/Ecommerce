<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Person;
use App\Models\Product;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::get('/hello', function () {
    return response()->json([
        'message' => 'Hello from Laravel API'
    ]);
});
Route::post('/people', function (Request $request) {

    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'age' => 'required|integer'
    ]);

    $person = Person::create($validated);

    return response()->json([
        'message' => 'Saved successfully',
        'data' => $person
    ]);
});

Route::get('/people', function () {
    $people = Person::all();
    return response()->json($people);
});
Route::get('/products', function () {
    return Product::all();
});

// Create a new product
Route::post('/products', function (Request $request) {
    $validated = $request->validate([
        'title' => 'required|string',
        'brand' => 'nullable|string',
        'description' => 'nullable|string',
        'image' => 'nullable|string',
        'price' => 'required|numeric'
    ]);

    $product = Product::create($validated);
    return response()->json(['message' => 'Product created', 'data' => $product]);
});