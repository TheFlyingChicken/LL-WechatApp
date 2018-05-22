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
      //$cond = 'category_id = '.$category_id;
      $str = 'SELECT b.*, i.image FROM brand b JOIN image i ON b.id = i.brand_id WHERE b.category_id = ';

      //$data = DB::select('brand', ['*'], $cond);
      $data = DB::get($str.$category_id);

      // $query = DB::raw($str.$category_id);
      // $data = $query->fetchAll();
      
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