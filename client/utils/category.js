
module.exports = {
  list: list,
  carGoods: carGoods
}

function carGoods() {
  return [
    {
      'name': 'Car',
      'image': '../../res/images/category-icon/6.png',
      'description': 'this is a car',
      'price': 100,
      'number': 1
    },
    {
      'name': 'Plane',
      'image': '../../res/images/category-icon/3.png',
      'description': 'this is a plane',
      'price': 200,
      'number': 1
    },
    {
      'name': 'Tank',
      'image': '../../res/images/category-icon/2.png',
      'description': 'this is a tank',
      'price': 300,
      'number': 1
    },
    {
      'name': 'Bike',
      'image': '../../res/images/category-icon/1.png',
      'description': 'this is a bike',
      'price': 300,
      'number': 1
    },
    {
      'name': 'UFO',
      'image': '../../res/images/category-icon/4.png',
      'description': 'this is a UFO',
      'price': 300,
      'number': 1
    },
    {
      'name': 'MOTO',
      'image': '../../res/images/category-icon/5.png',
      'description': 'this is a moto',
      'price': 300,
      'number': 1
    }
  ]
}

function list() {
  return [
    {
      id: 1,
      name: '口红',
      image: '../../res/images/category-icon/lipstick.png'
    },
    {
      id: 2,
      name: '面膜',
      image: '../../res/images/category-icon/mask.png'
    },
    {
      id: 3,
      name: '香水',
      image: '../../res/images/category-icon/perfume.png'
    },
    {
      id: 4,
      name: '兰博',
      image: '../../res/images/category-icon/1.png'
    },
    {
      id: 5,
      name: '保时捷',
      image: '../../res/images/category-icon/2.png'
    },
    {
      id: 6,
      name: '奔驰',
      image: '../../res/images/category-icon/3.png'
    },
    {
      id: 7,
      name: '宝马',
      image: '../../res/images/category-icon/4.png'
    },
    {
      id: 8,
      name: 'Volvo',
      image: '../../res/images/category-icon/5.png'
    },
    {
      id: 9,
      name: '柯尼塞格',
      image: '../../res/images/category-icon/6.png'
    },
    {
      id: 10,
      name: '法拉利',
      image: '../../res/images/category-icon/7.png'
    }
  ]
}
