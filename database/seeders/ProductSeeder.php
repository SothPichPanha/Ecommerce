<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'title' => 'Dell Inspiron 15 3000',
                'brand' => 'Dell',
                'description' => 'Intel Core i5-1135G7, 8GB RAM, 256GB SSD, Windows 11 Home',
                'price' => 599.99,
                'image' => '/image/dell.png'
            ],
            [
                'title' => 'MacBook Air M2',
                'brand' => 'Apple',
                'description' => 'Apple M2, 8GB RAM, 256GB SSD, macOS Ventura',
                'price' => 1199.99,
                'image' => '/image/macbook.png'
            ],
            [
                'title' => 'Lenovo ThinkPad X1',
                'brand' => 'Lenovo',
                'description' => 'Intel Core i7, 16GB RAM, 512GB SSD, Windows 11 Pro',
                'price' => 1499.99,
                'image' => '/image/thinkpad.png'
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
