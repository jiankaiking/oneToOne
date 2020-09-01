const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerId: null,
    billId:null,
    status:null,
    info: {},
    amount: '',
    remark: '',
  },
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
    this.popup1 = this.selectComponent("#popup1");
  },
  showPopup(e) {
    if (e.currentTarget.dataset.type == 'yes') {
      this.popup.showPopup();
    } else {
      this.popup1.showPopup();
    }

  },
  getMoney(e) {
    this.setData({
      amount: e.detail.value
    })
  },
  bindTextAreaBlur(e) {
    this.setData({
      remark: e.detail.value
    })
  },
  //确认 通过
  _success() {
    let { info, amount, billId } = this.data;
    $.httpRequest(api.billAudit, {
      billId: billId,
      amount: amount,
      customerId: info.customerBaseId,
      adminUserId: app.globalData.userInfo.id,
      status: 1
    })
      .then(res => {
        if (res.code == 200) {
          wx.showToast({
            icon: 'success',
            duration: 1000,
            success() {
              wx.navigateBack({
                delta: 1
              })
            },
          })
        }
      })
    this.popup.hidePopup();
  },
  //申请驳回
  reasonTrue() {
    let { info, remark, billId } = this.data;
    console.log(app.globalData.userInfo)
    $.httpRequest(api.billAudit, {
      billId: billId,
      remark: remark,
      customerId: info.customerBaseId,
      adminUserId: app.globalData.userInfo.id,
      status: 2
    })
      .then(res => {
        if (res.code == 200) {
          wx.showToast({
            icon: 'success',
            duration: 1000,
            success() {
              wx.navigateBack({
                delta: 1
              })
            },
          })
        }
      })
    this.popup1.hidePopup();
  },
  onLoad: function (options) {
    this.setData({
      customerId: options.customerId,
      billId: options.billId,
      status: options.status
    })
    this.getInfo()
  },
  getInfo() {
    $.httpRequest(api.companyInfo, {
      customerId: this.data.customerId
    })
      .then(res => {
        if (res.code == 200) {
          this.setData({
            info: res.data
          })
        }
      })
  },
})