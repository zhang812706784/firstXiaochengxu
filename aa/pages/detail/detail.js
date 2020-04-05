// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: true,
    animationData: {}
  },
  pinjia(){
    wx.navigateTo({
      url: '/pages/ping/ping',
    })
  },
  showW(event){
    let showFlag = event.currentTarget.dataset.show;
    if (showFlag == "true"){
      this.animation.translateY(300).step()
      this.setData({
        animationData: this.animation.export()
      })
      setTimeout(function () {
        this.animation.translateY(0).step()
        this.setData({
          animationData: this.animation.export()
        })
      }.bind(this), 1000)
    }else{
      this.animation.translateY(0).step()
      this.setData({
        animationData: this.animation.export()
      })
      setTimeout(function () {
        this.animation.translateY(300).step()
        this.setData({
          animationData: this.animation.export()
        })
      }.bind(this), 1000)
    }
    
  },
  phoneCall(){
    wx.makePhoneCall({
      phoneNumber: '19801059594' //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name
    })
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation
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
    return {
      title: '转发出去'
    }
  }
})