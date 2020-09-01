const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    optionIndex: null,
    goodArr: [],
    addData: {
      goodsId: '',
      customerBaseId: '',
      userLoginId: '',
      purchaseUnitPrice: '',
      purchaseNumber: '',
      remark: '',
    },
  },

  bindcompanyTypechange(e) {
    console.log(e)
    this.setData({
      optionIndex: e.detail.value,
      'addData.purchaseUnitPrice': this.data.goodArr[e.detail.value].unitPrice
    })
  },
  back() {
    wx.navigateBack({
      delta: 1
    })
  },
  add() {
    let data = this.data.addData;
    data.goodsId = this.data.goodArr[this.data.optionIndex].id
    data.userLoginId = app.globalData.userInfo.id
    data.customerBaseId = app.globalData.userInfo.customerId
    $.httpRequest(api.addpurchase, data, 'POST')
      .then(res => {
        if(res.code == 200){
          wx.navigateBack({
             delta:1 
          })
        }else{
          console.log(123)
          wx.showToast({
            title: res.msg,
            icon: 'success',
            duration: 2000,
          })
        }
      })
      
      
  },
  //商品
  getGoodList() {
    $.httpRequest(api.goodList)
      .then(res => {
        this.setData({
          goodArr: res.data
        })
      })
  },
  onLoad: function(options) {
    this.getGoodList()
  },
  bindAndSet(e) {
    let key = e.currentTarget.dataset.key;
    this.setData({
      [key]: e.detail.value
    })
  },

})