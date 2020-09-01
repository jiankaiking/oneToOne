const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {
    },
  },
  
  //详情
  getInfo(id) {
    $.httpRequest(api.salesInfo,{id})
      .then(res => {
        this.setData({
          info: res.data
        })
      })
  },
  onLoad: function (options) {
    this.getInfo(options.id)
  },
})