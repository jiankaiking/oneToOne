const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['个人', '企业'],
    index: 0,
    consumerBaseId: '',
    editId: null,
    memberName: '',
    idNumber: '',
  },
  bindAndSet(e) {
    let key = e.currentTarget.dataset.key;
    this.setData({
      [key]: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.itemid) {
      this.getInfo(options.itemid)
    } else {
      this.setData({
        consumerBaseId: options.id
      })
    }
  },
  getInfo(id) {
    $.httpRequest(api.memberdetail, {
        id
      })
      .then(res => {
        this.setData({
          consumerBaseId: res.data.consumerBaseId,
          editId: res.data.id,
          memberName: res.data.memberName,
          idNumber: res.data.idNumber,
          index: res.data.idType,
          idType: res.data.idType
        })
      })
  },

  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  //新增
  add() {
    let {
      consumerBaseId,
      index,
      memberName,
      idNumber,
      editId
    } = this.data;
    let pram = {
      consumerBaseId: consumerBaseId,
      memberName: memberName,
      idNumber: idNumber,
      memberType: index,
      idType: index,
      id: editId
    }
    let http = editId ? api.updatemember : api.addmember;
    $.httpRequest(http, pram, 'POST')
      .then(res => {
        if (res.code == 200) {
          var pages = getCurrentPages()
          var prevPage = pages[pages.length - 2]
          prevPage.getList(consumerBaseId)
          wx.navigateBack({
            delta: 1
          })
        }
      })
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