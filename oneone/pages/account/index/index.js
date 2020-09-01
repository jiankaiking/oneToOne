const api = require('../../api/index.js')
const httpRequest = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickeArr: [{
        name: '全部',
        value: ''
      },
      {
        name: '待审核',
        value: '0'
      },
      {
        name: '审批通过',
        value: '1'
      },
      {
        name: '审批驳回',
        value: '2'
      }
    ],
    listArr:[],
    mutIndex: 0
  },
  go: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.r
    })
  },
  bindPickerChange(e) {
    this.setData({
      mutIndex: e.detail.value
    })
    this.getList()
  },
  //获取账本列表
  getList() {
    httpRequest.httpRequest(api.billList, {
        userId: app.globalData.userInfo.id,
        status: this.data.pickeArr[this.data.mutIndex].value
      })
      .then(res => {
        if (res.code == 200) {
            this.setData({
              listArr:res.data
            })
        }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  
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
    this.getList()
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