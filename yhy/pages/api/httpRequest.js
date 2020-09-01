 function httpRequest(url, data = {}, method = "GET") {
   return new Promise(function(resolve, reject) {
     wx.request({
       url: url,
       data: data,
       method: method,
       header:{
         'Content-Type': 'application/x-www-form-urlencoded',
       },
       success(res) {
         if (res.data.code == 200) {
           //正常
           resolve(res.data);
         } else {
           //错误
           reject(res.data)
           wx.showToast({
             title: res.data.msg,
             icon: 'none'
           })
         }
       },
       fail(err) {
         reject("服务器连接异常，请检查网络再试")
       }
     })
   })
 }
module.exports = {
  httpRequest
}