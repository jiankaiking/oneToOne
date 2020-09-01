const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function(options) {
    this.jump()
  },
  jump() {
    wx.navigateBackMiniProgram({
      appId: 'wx7341c18b0d5dd423',
      path: '/pages/login/login',
      envVersion: 'trial',
      extraData: {
        id: app.globalData.userInfo.customerId //需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow 中获取到这份数据
      },
      success(res) {
        // 打开其他小程序成功同步触发
      }
    })
  }
})