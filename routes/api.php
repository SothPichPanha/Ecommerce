<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Person;
use App\Models\Product;
use App\Models\User;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;

Route::controller(ProductController::class)->prefix('products')->group(function () {
    Route::get('/', 'index');
    Route::post('/', 'store');


});

Route::post('/register', [AuthController::class, 'register']);
Route::get('/users', function () {
    return User::all();
});
Route::post('/login', [AuthController::class, 'login']);