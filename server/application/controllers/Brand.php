<?php

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Brand extends CI_Controller {
    /**
     * 获取 by category_id
     * @params category_id
     */
    public function all($category_id) {
      $str = 'SELECT b.*, i.image_url FROM brand b JOIN image i ON b.id = i.brand_id WHERE b.category_id = ';
      $data = DB::get($str.$category_id);
      
      $this->json([
        'code' => 1,
        'data' => $data
      ]);
    }
    /**
     * 增加
     */
    public function add() {
      $category_id = $_POST['category_id'];
      $brand_name = $_POST['name'];

      DB::insert('brand', [
        'category_id' => $category_id,
        'name' => $brand_name
      ]);
    }
    /**
     * 获取最新添加的
     */
    public function lasted() {
      $str = 'SELECT b.*, i.image_url FROM brand b JOIN image i ON b.id = i.brand_id ORDER BY id DESC limit 9';
      $data = DB::get($str);
      
      $this->json([
        'code' => 1,
        'data' => $data
      ]);
    }

    /**
     * 获取 指定的brand
     * @params brand_id
     */
    public function index($brand_id) {
      $str = 'SELECT b.*, i.image_url FROM brand b JOIN image i ON b.id = i.brand_id WHERE b.id = ';
      $data = DB::get($str.$brand_id);
  
      $this->json([
        'code' => 1,
        'data' => $data
      ]);
    }
}