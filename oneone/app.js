//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    // wx.getStorage({
    //   key: 'userInfo',
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail:function(err){
    //     wx.navigateTo({
    //       url: '/pages/login/login'
    //     })
    //   }
    // })
  },
  globalData: {
    userInfo: wx.getStorageSync('userInfo') || '',
    customerId:null,
  }
})