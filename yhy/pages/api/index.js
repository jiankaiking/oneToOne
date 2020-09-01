const baseUrl = "https://test-third-service.lywlsz.com.cn"
//const baseUrl = "http://192.168.0.111:8080"

module.exports = {
  login: baseUrl + '/user/admin/login', // 登录
  pendingList: baseUrl + '/admin/get/pending/list', //待审批列表
  billAudit: baseUrl + '/admin/bill/audit', //账本审批
  goodList: baseUrl + '/admin/get/goods/list', // 商品列表
  addGoods: baseUrl + '/admin/add/goods', // 新增商品
  goodTypeList: baseUrl + '/admin/get/goods/type/list', // 商品类型
  addgoodTypeList: baseUrl + '/admin/add/goods/type',//新增商品类型
  companyInfo: baseUrl + '/customer/get/company/bill/detail',//企业账本详情
  personalInfo: baseUrl + '/customer/get/personal/bill/detail',//个人账本详情
  goodDetail: baseUrl + '/admin/get/goods/detail',//商品详情
  goodstypedetail: baseUrl + '/admin/get/goods/type/detail',//商品类型详情
  updategoods: baseUrl + '/admin/update/goods',//商品修改
  updategoodstype: baseUrl + '/admin/update/goods/type',//商品类型修改
}