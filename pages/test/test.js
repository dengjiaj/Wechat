// pages/test/test.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        addorsub: 0,
        level: 0,
        timetype: 0,
    },
    initNumber: function () {
        var addorsub = this.data.addorsub;
        var level = this.data.level;
        var timetype = this.data.timetype;
        console.log(addorsub)
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        var that = this
        //获取app.js中全局数据
        this.data.userinfo = app.globalData.userinfo
        this.setData({
            userinfo: this.data.userinfo,
            addorsub: app.addorsub,
            level: app.level,
            timetype: app.timetype,
        })},


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        //  this.changeTimetype({
        //      timetype: app.timetype, addorsub: app.addorsub
        //    })
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