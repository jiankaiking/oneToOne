// pages/account/updatainfo/updatainfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idCardFrontImg: '',
    idCardBackImg: '',
    type: 1,
  },

  uploadCommit(e) {
    var name = this.data.type == 1 ? 'company' : 'personal'
    var obj = e.detail.value;
    var idCardFrontImg = name + '.idCardFrontImg';
    var idCardBackImg = name + '.idCardBackImg';
    var pages = getCurrentPages()
    var prev = pages[pages.length - 2]
    prev.setData({
      [idCardFrontImg]: obj.idCardFrontImg,
      [idCardBackImg]: obj.idCardBackImg
    })
    wx.navigateBack({
      delta: 1
    })
  },

  onLoad: function(options) {
    let prevPage = getCurrentPages()[getCurrentPages().length - 2]
    var typename = prevPage.data.index == 1 ? prevPage.data.company : prevPage.data.personal
    this.setData({
      type: options.type,
      idCardFrontImg: typename.idCardFrontImg,
      idCardBackImg: typename.idCardBackImg
    })
  },
  look() {
    console.log(this.data)
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