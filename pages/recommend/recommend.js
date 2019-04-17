Page({
  data: {
    recommendMenu: [],
  },
  toDetail(event) {
    console.log(event)
    wx.navigateTo({
      url: '/pages/menuDetail/menuDetail?id=' + event.currentTarget.id,
    })
  },
  onLoad() {
    wx.request({
      url: 'http://api.360meishi.net/?c=home&a=home',
      method: 'GET',
      data: {},
      success: res => {
        console.log(res.data.data.recommendCaipu);
        this.data.recommendMenu = res.data.data.recommendCaipu;
        this.setData(this.data);
      }
    })
  }

})