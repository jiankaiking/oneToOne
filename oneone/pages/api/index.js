//  const baseUrl = "http://test-third-service.lywlsz.com.cn"
const baseUrl = "https://test-third-service.lywlsz.com.cn"
//const baseUrl = "http://192.168.0.111:8080"

module.exports = {
  login: baseUrl + '/user/login', // 登录
  getUserInfo: baseUrl + '/customer/get/user/info',
  updataImg: baseUrl + '/file/upload', //上传文件
  billList: baseUrl + '/customer/get/bill/list', //我的账本
  buttonList: baseUrl + '/customer/button/list', // 首页切换按钮列表
  memberList: baseUrl + '/customer/member/list', // 成员列表
  addmember: baseUrl + '/customer/add/member', // 新增成员
  addCompany: baseUrl + '/customer/add/company/bill', //新增企业账本
  addPersonal: baseUrl + '/customer/add/personal/bill', //新增个人账本
  companyInfo: baseUrl + '/customer/get/company/bill/detail', //企业账本详情
  personalInfo: baseUrl + '/customer/get/personal/bill/detail', //个人账本详情
  editcompanyInfo: baseUrl + '/customer/update/company/bill', //修改企业账本详情
  editpersonalInfo: baseUrl + '/customer/update/personal/bill', //修改个人账本详情
  minelimit: baseUrl + '/customer/get/mine/limit', //我的额度,
  userbinding: baseUrl + '/customer/user/binding',//登录用户与客户绑定
  memberdetail: baseUrl + '/customer/member/detail',//成员详情
  updatemember: baseUrl + '/customer/update/member',//修改成员
}