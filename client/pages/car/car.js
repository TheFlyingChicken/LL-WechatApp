
var category = require('../../utils/category.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getItems()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getItems: function () {
    var carList = category.carGoods()
    carList.forEach(function(item) {
      item.selected = true
    })
    this.setData({
      list: carList
    })
  },

  /**
   * 选中一个Item
   */
  selectItem: function () {

  },
  /**
   * 减少数量
   */
  minusCount: function (e) {
    var index = parseInt(e.currentTarget.dataset.index)
    var list = this.data.list;
    if (list[index].number > 1){
      list[index].number -= 1
      this.setData({
        list: list
      })
    }
  },
  /**
   * 增加数量
   */
  addCount: function (e) {
    var index = parseInt(e.currentTarget.dataset.index)
    var list = this.data.list;
    list[index].number += 1
    this.setData({
      list: list
    })
  },
  /**
   * 删除商品
   */
  deleteItem: function (e) {
    var index = parseInt(e.currentTarget.dataset.index)
    var list = this.data.list;
    list.splice(index, 1);
    this.setData({
      list: list
    })
  }

})