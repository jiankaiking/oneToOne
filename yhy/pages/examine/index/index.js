const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipIndex: 0,
    listArr:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getList(){
    $.httpRequest(api.pendingList, { status: this.data.tipIndex == 0?0:''})
    .then(res=>{
       this.setData({
         listArr:res.data
       })
    })
  },

  go: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.r
    })
  },

  goInfo(e){
    let item = e.currentTarget.dataset.item;
    let url = item.customerType == 0 ? '../info/info':'../pinfo/pinfo'
    wx.navigateTo({
      url: `${url}?customerId=${item.customerId}&billId=${item.billId}&status=${item.status}`,
    })
  },

  changeTipIndex(e) {
    this.setData({
      tipIndex: e.currentTarget.dataset.index
    })
    this.getList()
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
    this.getList()
  },
})