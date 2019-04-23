Page({
  data:{
    id:'',
    navlist:[]
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
  onLoad(query){
    console.log(query);
    // this.data.id = query.id;
    this.setData({
      id: query.id
    })
    wx.request({
      url: 'http://api.360meishi.net/?a=caipuofstandcate&c=caipu&cateid='+ this.data.id+'&page=0',
      method:'GET',
      data:{},
      success: res => {
        // console.log(res);
        this.data.navlist = res.data.data;
        this.setData(this.data);
      }
    })

  }
})