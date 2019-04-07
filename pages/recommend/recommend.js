Page({
  data: {
    recommendMenu: [],
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