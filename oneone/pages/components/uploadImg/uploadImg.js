const app = getApp();
const api = require('../../api/index.js')
const $ = require('../../api/httpRequest.js')

Component({
  behaviors: ['wx://form-field'],
  properties: {
    showImgUrl: {
      type: 'string',
      value: "",
      observer: function(newImgUrl, oldImgUrl) {
        if (newImgUrl != null && newImgUrl != '' ) {
          this.setData({
            showImgUrl: newImgUrl,
            value: newImgUrl,
            copImg: newImgUrl,
            showUpload: false,
          })
        }else{
          this.setData({
            showUpload: true,
          })
        }
      }
    }
  },
  data: {
    showImgUrl: '',
    copImg: '',
    showUpload: true,
    value: ''
  },
  methods: {
    // 删除图片
    clearImg: function() {
      this.setData({
        showImgUrl: '',
        value: '',
        copImg: '',
        
      })
     // console.log(this.data)
      // this.data.showUpload = true
    },
    //展示图片
    showImg: function(e) {
      var that = this;
      wx.previewImage({
        urls: [this.data.copImg],
        current: this.data.copImg
      })
    },
    uploadImg(tempFilePaths) {
      var that = this;
      wx.uploadFile({
        url: api.updataImg,
        filePath: tempFilePaths,
        name: 'uploadFile',
        header: {
          'content-type': 'multipart/form-data'
        },
        success(res) {
          let f = JSON.parse(res.data)
          that.setData({
            showImgUrl:f.data.url
          })
          // console.log(f)
        }
      })
    },
    //上传图片
    upload: function(e) {
      var that = this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], 
        sourceType: ['album', 'camera'],
        success: function(res) {
        
          let tempFilePaths = res.tempFilePaths[0];
           that.uploadImg(tempFilePaths)
        }
      })
    }
  },
})