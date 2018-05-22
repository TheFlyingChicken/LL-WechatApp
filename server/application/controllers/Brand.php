<?php

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Brand extends CI_Controller {
    
    public function all($category_id) {
      $str = 'SELECT b.*, i.image_url FROM brand b JOIN image i ON b.id = i.brand_id WHERE b.category_id = ';
      $data = DB::get($str.$category_id);
      
      $this->json([
        'code' => 1,
        'data' => $data
      ]);
    }

    public function add() {
      $category_id = $_POST['category_id'];
      $brand_name = $_POST['name'];

      DB::insert('brand', [
        'category_id' => $category_id,
        'name' => $brand_name
      ]);
    }

    public function lasted() {
      $str = 'SELECT b.*, i.image_url FROM brand b JOIN image i ON b.id = i.brand_id ORDER BY id DESC limit 9';
      $data = DB::get($str);
      
      $this->json([
        'code' => 1,
        'data' => $data
      ]);
    }
}