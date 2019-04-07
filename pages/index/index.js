Page({
  data:{
    menu:[],
    hotlist:[]
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