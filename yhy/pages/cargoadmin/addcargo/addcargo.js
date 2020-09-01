const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    typeArr: [],
    optionIndex: null,
    editId:null,
    goods: {
      goodsName: '',
      goodsTypeId: '',
      unitPrice: '',
      remark: '',
    },
    typeObj: {
      userLoginId: '',
      typeName: '',
      remark: '',
    },
  },
  bindcompanyTypechange(e) {
    console.log(this.data.typeArr[e.detail.value].id)
    this.setData({
      optionIndex: e.detail.value,
      'goods.goodsTypeId': this.data.typeArr[e.detail.value].id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      type: options.type,
      editId: options.id ? options.id:null
    })
    options.type == 0 && this.getType()
    options.id && this.getInfo(options.id)
  },
  getInfo(id){
    let http = this.data.type == 1 ? api.goodstypedetail : api.goodDetail
    let val = this.data.type == 1 ? 'typeObj' :'goods'
    $.httpRequest(http,{id})
    .then(res=>{
      this.setData({
        [val]:res.data,
        optionIndex:  this.data.typeArr.findIndex(item => item.id == res.data.goodsTypeId)
      })
      console.log(this.data.typeArr, res.data.goodsTypeId)
      console.log(this.data.typeArr.findIndex(item => item.id == res.data.goodsTypeId))
    })
    // console.log(this.data.optionIndex)
  },
  getType() {
    $.httpRequest(api.goodTypeList)
      .then(res => {
        this.setData({
          typeArr: res.data
        })
      })
  },

  

  add() {
    let { type, goods, typeObj, editId} = this.data;
    let data = type == 0 ? goods : typeObj;
    let http = type == 0 ? (editId ? api.updategoods : api.addGoods) : (editId ? api.updategoodstype : api.addgoodTypeList) 
    delete data.createTime
    data.userLoginId = app.globalData.userInfo.id
    $.httpRequest(http, data, 'POST')
      .then(res => {
        if (res.code == 200) {
          wx.navigateBack({
            delta: 1
          })
        }
      })
  },
  bindAndSet(e) {
    let key = e.currentTarget.dataset.key;
    this.setData({
      [key]: e.detail.value
    })
  },

})