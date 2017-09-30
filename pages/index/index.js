//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    item:23,
    buttonArray:[{
      name:"button_1",
      id:"button_1",
      text:"开始测试",
      type:"primary",
      even:"start",
    }]
  },
 

  //跳转到游戏界面
  start:function(e){
    wx.navigateTo({
      url: '../test/test'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
