const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickArr: [],
    myInfo: app.globalData.userInfo,
    mutIndex: 0
  },
  onLoad: function(options) {
    this.getButtonList()
  },
  go: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.r
    })
  },
  setBar(){
    wx.setTabBarBadge({
      index: 1,
      text: '3',
    })
  },
  onShow(){
    this.setData({
      myInfo:app.globalData.userInfo
    })
    console.log(this.data.myInfo)
  },

  //切换
  bindPickerChange(e) {
    this.setData({
      mutIndex: e.detail.value
    })
    this.setUserBind(this.data.pickArr[this.data.mutIndex].customerId)
    // app.globalData.customerId = this.data.pickArr[this.data.mutIndex].customerId
  },
  getUserInfo() {
     $.httpRequest(api.getUserInfo,{userId:app.globalData.userInfo.id})
     .then(res=>{
        wx.setStorage({
          key: 'userInfo',
          data: res.data
        })
        app.globalData.userInfo = res.data
        this.setData({
          myInfo:res.data
        })
     })
  },
  setUserBind(customerId) {
    $.httpRequest(api.userbinding, {
        userId: app.globalData.userInfo.id,
        cutomerId: customerId
      }, 'POST')
      .then(res => {
        if (res.code == 200) {
          this.getUserInfo()
        }
      })
  },

  //获取公司集合
  getButtonList() {
    $.httpRequest(api.buttonList, {
        userId: app.globalData.userInfo.id
      })
      .then(res => {
        this.setData({
          pickArr: res.data
        })
      })
  },

  gotabbar(e) {
    wx.switchTab({
      url: e.currentTarget.dataset.r
    })
  },

})