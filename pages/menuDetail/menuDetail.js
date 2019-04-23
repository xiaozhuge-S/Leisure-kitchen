Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemInfo: null,
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
    ],
    favourateImg: './../../assets/menu_collect_false.png'
  },
  setFavourate(data) {
    wx.getStorage({
      key: 'menu_favourite',
      complete: function (res) {
        let menuFavourite = []
        if (res.data) {
          res.data.unshift(data)
          menuFavourite = res.data
        } else {
          menuFavourite.unshift(data)
        }
        wx.setStorage({
          key: "menu_favourite",
          data: menuFavourite
        })
      }
    })
  },
  addFavourate(event) {
    if (this.data.favourateImg.indexOf('menu_collect_false') != -1) {
      this.data.favourateImg = './../../assets/menu_collect_true.png'
      this.setFavourate(this.data.itemInfo)
    } else {
      this.data.favourateImg = './../../assets/menu_collect_false.png'
      wx.getStorage({
        key: 'menu_favourite',
        complete: function (res) {
          let menuFavourite = []
          if (res.data) {
            res.data.forEach((value,index)=>{
              if (value.id == this.data.itemInfo.id) {
                res.data.splice(index,1)
              }
            })
            menuFavourite = res.data
          } else {
            console.log(menuFavourite)
          }
          wx.setStorage({
            key: "menu_favourite",
            data: menuFavourite
          })
        }
      })
    }
    this.setData(this.data);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.itemInfo = JSON.parse(options.info)
    wx.getStorage({
      key: 'menu_favourite',
      complete: (res) => {
        let menuFavourite = []
        if (res.data) {
          res.data.forEach((value, index) => {
            if (value.id == this.data.itemInfo.id) {
              this.data.favourateImg = './../../assets/menu_collect_true.png' 
            } else {
              this.data.favourateImg = './../../assets/menu_collect_false.png'
            }
          })
          menuFavourite = res.data
        } else {
          console.log(menuFavourite)
        }
        wx.setStorage({
          key: "menu_favourite",
          data: menuFavourite
        })
        this.setData(this.data);
      }
    }) 
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