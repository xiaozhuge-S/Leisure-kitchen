Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuDetailsList:[
      {
        "cai":"肉肉",
        "gg":"100g"
      },
      {
        "cai": "肉肉",
        "gg": "100g"
      },
      {
        "cai": "肉肉",
        "gg": "100g"
      },
      {
        "cai": "肉肉",
        "gg": "100g"
      },
      {
        "cai": "肉肉",
        "gg": "100g"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)  
    wx.request({
      url: 'http://api.360meishi.net/?a=info&c=caipu&code=' + options.id,
      method: 'GET',
      data: {},
      success: res => {
        this.data.menuDetailsList = res.data.data;
        console.log(this.data.menuDetailsList);
        this.setData(this.data);
      }
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