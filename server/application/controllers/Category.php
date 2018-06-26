<?php

use QCloud_WeApp_SDK\Mysql\Mysql as DB;

class Category extends CI_Controller {
    /**
     * 获取
     */
    public function all() {
        $data = DB::select('category', ['*']);
       
        $this->json([
          'code' => 1,
          'data' => $data
        ]);
    }
}