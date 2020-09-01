//app.js
App({
  onLaunch: function (options) {
    //  var id = options.referrerInfo.customerId;
    // this.globalData.customerId = id
    // var sid = options.referrerInfo.store_id;
},
globalData: {
  userInfo: wx.getStorageSync('userInfo') || '',
  customerId:null,
}
})