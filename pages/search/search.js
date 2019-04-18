// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputvalue:'',
    selectList:[]
  },
  toDetail(event) {
    console.log(event)
    wx.navigateTo({
      url: '/pages/menuDetail/menuDetail?id=' + event.currentTarget.id,
    })
  },
  getvalue(e){
    this.setData({
      inputvalue: e.detail.value
    })
    console.log(this.data.inputvalue);
  },
  selectmenu(){
    wx.request({
      url: `http://api.360meishi.net/?a=caipu&c=search&keywords=${this.data.inputvalue}&page=${this.page}`,
      method: 'GET',
      data: {},
      success: res => {
        console.log(res.data.data);
        this.data.selectList = res.data.data;
        this.setData(this.data);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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