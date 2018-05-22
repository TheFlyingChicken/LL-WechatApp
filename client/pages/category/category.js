var category = require('../../utils/category.js')
var config = require('../../config')

// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category_id: 0,
    brands: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.category_id = options.category_id
    console.log(this.data.category_id)
    this.getBrands()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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

  getBrands: function () {
    var self = this
    var url = config.service.brandUrl + '/' + self.data.category_id
    wx.request({
      url: url,
      success: function (res) {
        self.setData({
          brands: res.data.data
        })
        console.log(res.data)
      },
      fail: function (e) {
        console.error(e)
      }
    })
  },
})