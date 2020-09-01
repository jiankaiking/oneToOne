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
  onLoad: function (options) {
    this.getUserInfo()
  },
  onShow(){
    this.getList()
  },
  go(e){
    wx.navigateTo({
      url: `../info/info?id=${e.currentTarget.dataset.id}&type=${this.data.tipIndex}`,
    })
  },
  getUserInfo(){
    $.httpRequest(api.getUserInfo, {
      userId: app.globalData.userInfo.id
    })
      .then(res => {
        app.globalData.userInfo = res.data;
        wx.setStorage({
          key: 'userInfo',
          data: res.data,
        })
        
        app.globalData.customerId = res.data.customerId
        this.getList()
      })
    // console.log(app.globalData.userInfo,1)
  },
  getList(){
    // console.log(app.globalData.userInfo,2)
    $.httpRequest(this.getUrl(), { customerId: app.globalData.userInfo.customerId}) 
    .then(res=>{
      this.setData({
        listArr:res.data
      })
    })
  },
  getUrl(){
    return this.data.tipIndex == 0 ? api.outList : (this.data.tipIndex == 1?api.intoList:api.checkList)
  },

  changeTipIndex(e) {
    this.setData({
      tipIndex: e.currentTarget.dataset.index
    })
    this.getList()
  }
 
})