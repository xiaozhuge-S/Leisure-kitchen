Page({
  data:{
    menu:[],
    hotlist:[]
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
  onLoad(){
    wx.request({
      url: 'http://api.360meishi.net/?c=home&a=home',
      method: 'GET',
      data:{},
      success: res => {
        // console.log(res.data.data.hotCategory);
        this.data.menu = res.data.data.hotCategory;
        this.setData(this.data);
      }
    }),
      wx.request({
      url: 'http://api.360meishi.net/?a=caipuofstandcate&c=caipu&cateid=3&page=${this.page}',
        method: 'GET',
        data: {},
        success: res => {
          // console.log(res.data.data);
          this.data.hotlist = res.data.data;
          this.setData(this.data);
        }
      })
  }
 
})