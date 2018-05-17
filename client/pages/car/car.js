
var category = require('../../utils/category.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    selectedList: [],
    totalCounts: 0,
    selectAll: false
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
      item.selected = false
    })
    this.setCarInfo(carList, this.calculate(), this.data.selectAll)
  },
  setCarInfo: function (list, total, allSelected) {
    this.setData({
      list: list,
      totalCounts: total,
      selectAll: allSelected
    })
  },
  /**
   * 减少数量
   */
  minusCount: function (e) {
    var index = parseInt(e.currentTarget.dataset.index)
    var list = this.data.list;
    if (list[index].number > 1){
      list[index].number -= 1
      list[index].selected = true
      this.setCarInfo(list, this.calculate(), this.data.selectAll)
    }
  },
  /**
   * 增加数量
   */
  addCount: function (e) {
    var index = parseInt(e.currentTarget.dataset.index)
    var list = this.data.list;
    list[index].number += 1
    list[index].selected = true
    this.setCarInfo(list, this.calculate(), this.data.selectAll)
  },
  /**
   * 选中商品
   */
  selectItem: function (e) {
    var index = parseInt(e.currentTarget.dataset.index)
    var list = this.data.list;
    list[index].selected = !list[index].selected
    this.setCarInfo(list, this.calculate(), this.data.selectAll)
  },
  /**
   * 计算金额
   */
  calculate: function () {
    var list = this.data.list
    var total = 0
    for (var i = 0; i < list.length; i++) {
      var curItem = list[i]
      if (curItem.selected) {
        total += parseFloat(curItem.price) * curItem.number
      }
    }
    return total
  },
  /**
   * 全选
   */
  selectAllItems: function () {
    var list = this.data.list
    var selected = !this.data.selectAll
    list.forEach(function(item){
      item.selected = selected
    })
    this.setCarInfo(list, this.calculate(), selected)
  },
  /**
   * 删除商品
   */
  deleteSelectedItems: function () {
    var list = this.data.list
    var leftedList = list.filter(function (item) {
      return !item.selected
    })
    this.setData({
      list: leftedList
    })
    this.setData({
      totalCounts: this.calculate()
    })
  },
  /**
   * 
   */
  generateOrder: function () {

  }
})