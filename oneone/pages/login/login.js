const api = require('../api/index.js')
const httpRequest = require('../api/httpRequest.js')
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginName: '',
    loginPwd: '',
  },
  onLoad() {
    // console.log(123)
    // console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      wx.switchTab({
        url: "/pages/home/index/index",
      })
    }
  },
  login() {

    httpRequest.httpRequest(api.login, {
        loginName: this.data.loginName,
        loginPwd: this.data.loginPwd
      }, 'POST')
      .then(res => {
        if (res.code == 200) {
          app.globalData.userInfo = res.data
          wx.setStorage({
            key: 'userInfo',
            data: res.data
          })
          wx.switchTab({
            url: "/pages/home/index/index",
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  getName(e) {
    this.setData({
      loginName: e.detail.value
    })
  },
  getPassWord(e) {
    this.setData({
      loginPwd: e.detail.value
    })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})