// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuHistory: [],
    menuFavourite: [],
    hotlist: [],
    isEmpoty: {
      hitory: false,
      favourite: false
    }
  },
  toDetail(event) {
    wx.getStorage({
      key: 'menu_history',
      complete: function (res) {
        let menuHistory = []
        if (res.data) {
          res.data.unshift(event.currentTarget.dataset.item)
          menuHistory = res.data
        } else {
          menuHistory.unshift(event.currentTarget.dataset.item)
        }
        wx.setStorage({
          key: "menu_history",
          data: menuHistory
        })
      }
    })
    wx.navigateTo({
      url: '/pages/menuDetail/menuDetail?id=' + event.currentTarget.id + '&info=' + JSON.stringify(event.currentTarget.dataset.item),
    })
  },

  changeTab(event) {
    if(event.currentTarget.dataset.id == 0) {
      this.data.hotlist = this.data.menuHistory
    } else if(event.currentTarget.dataset.id == 1) {
      this.data.hotlist = this.data.menuFavourite
    }
    this.setData(this.data);
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
    wx.getStorage({
      key: 'menu_history',
      success: (res) => {
        if (res.data) {
          // res.data.forEach((value, index) => {
          //   if (value.id == this.data.itemInfo.id) {
          //     res.data.splice(index, 1)
          //   }
          //   wx.setStorage({
          //     key: "menu_history",
          //     data: res.data
          //   })
          // })
          this.data.menuHistory = res.data
          this.data.hotlist = this.data.menuHistory
          this.setData(this.data)
        } else {
          this.data.isEmpoty.hitory = true
          this.setData(this.data)
        }
      },
      fail: () => {
        this.data.isEmpoty.hitory = true
        this.setData(this.data)
      }
    })
    wx.getStorage({
      key: 'menu_favourite',
      success: (res) => {
        if (res.data) {
          // res.data.forEach((value, index) => {
          //   if (value.id == this.data.itemInfo.id) {
          //     res.data.splice(index, 1)
          //   }
          //   wx.setStorage({
          //     key: "menu_favourite",
          //     data: res.data
          //   })
          // })
          this.data.menuFavourite = res.data
        } else {
          this.data.isEmpoty.favourite = true
        }
        this.setData(this.data)
      },
      fail: () => {
        this.data.isEmpoty.favourite = true
        this.setData(this.data)
      }
    })
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