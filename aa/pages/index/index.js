// pages/index/index.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    background: ['banner1.jpg', 'banner2.png', 'banner3.jpg'],
    lessonList: app.globalData.lessonList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let lesson = this.data.lessonList;
    this.setData({
      lessonList: lesson.map((item) => {
        this.reverseBase64(item);
        return item;
      })
    })
    console.log(this.data.lessonList)
  },
  // 将本地图片Url地址转成base64格式
  reverseBase64(obj) {
    wx.getFileSystemManager().readFile({
      filePath: obj.imagePath, //选择图片返回的相对路径
      encoding: 'base64', //编码格式
      success: res => { //成功的回调
        // console.log('data:image/png;base64,' + res.data)
        // res.data = res.data.replace(/[\r\n]/g, ""); 
        obj.imagePath = res.data;
        console.log(obj.imagePath)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const version = wx.getSystemInfoSync().SDKVersion
    console.log(version)
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