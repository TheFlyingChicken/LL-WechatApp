<?php

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Category extends CI_Controller {
    public function categories() {
        $data = DB::select('category', ['*']);
       
        $this->json([
          'code' => 1,
          'data' => $data
        ]);
    }

    public function brands($category_id) {
      $cond = 'category_id = '.$category_id;
      $data = DB::select('brand', ['*'], $cond);

      $this->json([
        'code' => 1,
        'data' => $data
      ]);
    }

    public function addBrand() {
      $category_id = $_POST['category_id'];
      $brand_name = $_POST['name'];

      DB::insert('brand', [
        'category_id' => $category_id,
        'name' => $brand_name
      ]);
    }

    public function lastedBrands() {
      $data = DB::select('brand', ['*'], '', 'and', 'ORDER BY id DESC limit 12');
      $this->json([
        'code' => 1,
        'data' => $data
      ]);
    }
}