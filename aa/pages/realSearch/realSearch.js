// pages/realSearch/realSearch.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hotList: ['vue', 'react', 'javascript', 'html', 'css', 'javascript', 'html', 'css'],
    storageList: [],
    searchCode: '',
    showLesson: false,
    lessonList: app.globalData.lessonList
  },
  // 查询按钮
  search(event){
    this.setData({
      showLesson: true
    })
    // event.detail 输入框中的值
    this.saveStorage(event.detail.value)
    // 收起键盘
    wx.hideKeyboard()
  },
  // 本地存储
  saveStorage(value){
    // 获取缓存值
    let list = wx.getStorageSync('storageList') || [];
    // 缓存数量不能大于10，如果大于10从末尾弹出一个
    if (list.length >= 10){
      list.pop();
    }
    // 判断输入框中的值是否为空,不为空并且数组中不能存在重复
    if (value && !list.includes(value)){
      list.unshift(value);
    }
    this.setData({
      storageList: list
    })
    wx.setStorage({
      key: "storageList",
      data: list
    })
  },
  closeFun(){
    this.setData({
      searchCode: ''
    })
  },
  cancel(){
    this.setData({
      showLesson: false
    })
  },
  // 清空本地存储
  clearAll(){
    wx.clearStorageSync();
    this.setData({
      storageList: []
    })
  },
  // 热门搜索绑定事件
  tapText(event){
    let value = event.currentTarget.dataset.name;
    this.setData({
      searchCode: value,
      showLesson: true
    })
    this.saveStorage(value);
  },
  // 点击课程
  aLesson(event){
    let name = event.detail;
    wx.navigateTo({
      url: `/pages/detail/detail?name=${name}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = wx.getStorageSync('storageList') || [];
    this.setData({
      storageList: list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})