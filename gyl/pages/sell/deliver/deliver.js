const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    info: {
    },
  },
  back(){
    wx.navigateBack({
      delta:1
    })
  },
  trueF(){
    $.httpRequest(api.confirmdelivery,{id:this.data.id})
    .then(res=>{
      if(res.code == 200){
        wx.navigateTo({
          url: `../deliverInfo/deliverInfo?id=${this.data.id}`,
        })
      }
    })
  },
  //详情
  getInfo(id) {
    $.httpRequest(api.deliverInfo, { id })
      .then(res => {
        this.setData({
          info: res.data
        })
      })
  },
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    this.getInfo(options.id)
  },
})