const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperH: '', //swiper高度
    nowIdx: 0, //当前swiper索引
    mineInfo: {},
    myInfo: app.globalData.userInfo,
    imgList: [ //图片列表
      "../../../static/image/act.png",
      "../../../static/image/act.png",
      "../../../static/image/act.png",
    ]
  },
  //获取swiper高度
  getHeight: function(e) {
    var winWid = wx.getSystemInfoSync().windowWidth - 2 * 50; //获取当前屏幕的宽度
    var imgh = e.detail.height; //图片高度
    var imgw = e.detail.width;
    var sH = winWid * imgh / imgw + "px"
    this.setData({
      swiperH: sH //设置高度
    })
  },
  getInfo() {
    $.httpRequest(api.minelimit, {
        customerId: app.globalData.userInfo.customerId
      })
      .then(res => {
        this.setData({
          mineInfo: res.data
        })
      })
  },
  //swiper滑动事件
  bindchange: function(e) {
    this.setData({
      nowIdx: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      myInfo: app.globalData.userInfo
    })
    this.getInfo()
  },
  go: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.r
    })
  }
})