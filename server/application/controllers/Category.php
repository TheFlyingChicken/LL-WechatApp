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
}