// pages/account/updatainfo/updatainfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blOrUscc: '',
    bankAccountProve: '', //开户银行证明
    type: 0,
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
    ]
  },
  uploadCommit(e) {
    var obj = e.detail.value;
    var name = this.data.type == 1 ? 'company' : 'personal';
    var pages = getCurrentPages()
    var prev = pages[pages.length - 2]
    if (this.data.type == 1) {
      prev.setData({
        [name + '.blOrUscc']: obj.blOrUscc,
        [name + '.bankAccountProve']: obj.bankAccountProve
      })
    }
    this.setData({
      'otherData[0].otherDataVlaue': obj.one,
      'otherData[1].otherDataVlaue': obj.two,
      'otherData[2].otherDataVlaue': obj.three
    })
    prev.setData({
      [name + '.otherData']: this.data.otherData
    })
    console.log(prev.data)
    wx.navigateBack({
      delta:1
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let prevPage = getCurrentPages()[getCurrentPages().length - 2]
    var typename = prevPage.data.index == 1 ? prevPage.data.company : prevPage.data.personal
    if(options.type == 1){
      this.setData({
        blOrUscc: typename.blOrUscc,
        bankAccountProve: typename.bankAccountProve,
      })
    }
    this.setData({
      type: options.type,
      otherData: typename.otherData,
    })
  },
})