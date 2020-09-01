const app = getApp();
const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status:null, //是否可以修改
    array: ['个人', '企业'],
    customerId: null,
    typeArr: ["身份证件", "工作证件", "其他证件", "结婚证件"], //证件类型
    companyTypeArr: ["国有企业", "集体企业", "股份合作企业","联营企业"],
    index: 0,
    date: '请输入',
    region: ["", "", ""],
    multiIndex: [0, 0, 0],
    company: {
      companyName: '', //企业名称
      registType: '', //注册类型
      legalPersonName: '', //法人代表姓名
      legalPersonIdNo: '', //法人身份证号
      copyOfIdCard: '', //身份证复印件
      papersType: '', //证件类型
      unifiedSocialCreditCode: '', //统一社会信用编码
      bankAccount: '', //银行账号
      bank: '', //开户银行
      idCardFrontImg: '', //身份证正面
      idCardBackImg: '', //身份证反面
      bankLocation: '', //开户省市
      bankOfBranch: '', //所属支行
      otherData: [{
          otherDataKey: 'aaa',
          otherDataVlaue: ''
        },
        {
          otherDataKey: 'aaa',
          otherDataVlaue: ''
        },
        {
          otherDataKey: 'aaa',
          otherDataVlaue: ''
        }
      ],
      bankAccountProve: '', //银行开户证明不能为空
      blOrUscc: '', //营业执照或统一社会信用代码复印件
    },
    personal: {
      realName: '',
      otherData: [{
          otherDataKey: 'aaa',
          otherDataVlaue: ''
        },
        {
          otherDataKey: 'aaa',
          otherDataVlaue: ''
        },
        {
          otherDataKey: 'aaa',
          otherDataVlaue: ''
        }
      ],
      idNo: '',
      idCardEndTime: '', //身份证到期日期
      copyOfIdCard: '', //身份证复印件
      idCardFrontImg: '', //身份证正面
      idCardBackImg: '', //身份证反面
    }
  },
  bindAndSet(e) {
    let key = e.currentTarget.dataset.key;
    this.setData({
      [key]: e.detail.value
    })
  },

  //注册类型
  bindcompanyTypechange(e){
    this.setData({
      'company.registType': e.detail.value
    })
  },
  //证件类型
  bindTypechange(e) {
    this.setData({
      'company.papersType': e.detail.value
    })
  },
  checkboxChange(e){
    console.log(e)
    this.setData({
      'personal.idCardEndTime': e.detail.value.length?'9999-12-31':''
    })
  },
  onLoad: function(options) {
    if (options.type) {
      this.setData({
        status: options.status ? options.status:null,
        customerId: options.customerId,
        index: options.type == 0 ? 1 : 0
      })
      this.getAccountInfo()
    }
  },
  //获取详情
  getAccountInfo() {
    var http = this.data.index == 1 ? api.companyInfo : api.personalInfo;
    var name = this.data.index == 1 ? 'company' : 'personal';
    $.httpRequest(http, {
        customerId: this.data.customerId
      })
      .then(res => {
        this.setData({
          [name]: res.data
        })
      })
    // console.log(this.data)

  },

  // 选择三级联动
  changeMultiPicker(e) {
    this.setData({
      region: e.detail.value,
      'company.bankLocation': e.detail.value[0] + e.detail.value[1]
    });
  },
  go: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.r
    })
  },
  goAtherinfo(e) {
    wx.navigateTo({
      url: `${e.currentTarget.dataset.r}?type=${this.data.index}`
    })
  },
//个人企业
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value,
      'personal.idCardEndTime': e.detail.value
    })
  },

//新增
  add() {
    let data = {};
    let http = '';
    if (this.data.index == 1) {
      data = this.data.company
      http = api.addCompany
    } else {
      data = this.data.personal
      http = api.addPersonal
    }
    data.userLoginId = app.globalData.userInfo.id;
    data.otherData = JSON.stringify(data.otherData)
    $.httpRequest(http, data, 'POST')
      .then(res => {
        if (res.code == 200) {
          wx.navigateBack({
            delta: 1
          })
        }
      })
  },

//编辑
  edit() {
    let data = {};
    let http = '';
    if (this.data.index == 1) {
      data = this.data.company
      http = api.editcompanyInfo
    } else {
      data = this.data.personal
      http = api.editpersonalInfo
    }
    data.userLoginId = app.globalData.userInfo.id;
    data.otherData = JSON.stringify(data.otherData)
    $.httpRequest(http, data, 'POST')
      .then(res => {
        if (res.code == 200) {
          wx.navigateBack({
            delta: 1
          })
        }else{
          data.otherData = JSON.parse(data.otherData)
        }
      })
  },
})