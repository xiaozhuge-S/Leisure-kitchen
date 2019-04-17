Page({
  data:{
    id:'',
    navlist:[]
  },
  toDetail(event) {
    console.log(event)
    wx.navigateTo({
      url: '/pages/menuDetail/menuDetail?id=' + event.currentTarget.id,
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