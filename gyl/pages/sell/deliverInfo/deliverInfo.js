const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    addData: {
      sellInfoId: '',
      shipName: '',
      shipOrderNo: '',
      recipients: '',
      contact: '',
      address: '',
    },
  },
  back() {
    wx.navigateBack({
      delta: 2
    })
  },
  onLoad: function(options) {
    this.setData({
      'addData.sellInfoId': options.id
    })
  },
  bindAndSet(e) {
    let key = e.currentTarget.dataset.key;
    this.setData({
      [key]: e.detail.value
    })
  },
  trueSave() {
    $.httpRequest(api.addshippingInfo, this.data.addData, 'POST')
      .then(res => {
        if (res.code == 200) {
          this.back()
        }
      })
  },
})