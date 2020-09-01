const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipIndex: 0,
    isDealers:app.globalData.userInfo.isDealers,
    listArr:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isDealers: app.globalData.userInfo.isDealers
    })
  },
  getList(){
    let http = this.data.tipIndex == 0 ? api.purchaseList : api.companyselasList;
    $.httpRequest(http, { customerId: app.globalData.userInfo.customerId})
    .then(res=>{
      this.setData({
        listArr:res.data
      })
    })

  },

  changeTipIndex(e) {
    this.setData({
      tipIndex: e.currentTarget.dataset.index
    })
    this.getList()
  },
  go: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.r
    })
  },
  goRouter(e){
    var status = e.currentTarget.dataset.status;
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: status == 0 ? `../sellInfo/sellInfo?id=${id}` : `../deliver/deliver?id=${id}`,
    })
  },
  onShow: function () {
    this.getList()
  },

  
})