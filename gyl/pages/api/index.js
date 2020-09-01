//  const baseUrl = "http://test-third-service.lywlsz.com.cn"
const baseUrl = "https://test-third-service.lywlsz.com.cn"
//const baseUrl = "http://192.168.0.111:8080"

module.exports = {
  login: baseUrl + '/user/scm/login', // 登录
  getUserInfo: baseUrl + '/customer/get/user/info',//获取用户信息
  outList: baseUrl + '/scm/get/warehouse/out/list', //出库列表
  outInfo: baseUrl + '/scm/get/warehouse/out/detail', //出库详情
  intoList: baseUrl + '/scm/get/warehouse/into/list', // 入库列表
  intoInfo: baseUrl + '/scm/get/warehouse/into/detail', // 入库详情
  checkList: baseUrl + '/scm/get/warehouse/check/list', // 盘库列表
  purchaseList: baseUrl + '/scm/get/purchase/list',//采购列表
  purchaseInfo: baseUrl + '/scm/get/purchase/detail',//采购详情
  addpurchase: baseUrl + '/scm/add/purchase',//新增采购
  companyselasList: baseUrl + '/scm/get/company/sales/list',//企业销售列表
  dealerssalesList: baseUrl + '/scm/get/dealers/sales/list',//经销商销售列表
  salesInfo: baseUrl + '/scm/get/sales/detail',//销售详情
  goodList: baseUrl + '/admin/get/goods/list',//商品列表
  addSelas: baseUrl + '/scm/add/sales',//新增销售
  deliverInfo: baseUrl + '/scm/confirm/delivery/detail',//确认发货详情
  confirmdelivery: baseUrl + '/scm/confirm/delivery',//确认发货
  addshippingInfo: baseUrl + '/scm/add/delivery/shipping/info',//新增发货物流信息
}