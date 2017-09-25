//level.js
//获取应用实例
var app = getApp()
const levels = []

for (let i = 1; i < 9; i++) {
    levels.push(i)
}
Page({
    data: {
        levels:levels,
        level:9,
        value:[10],
        buttonArray: [  {
            name: "button_3",
            id: "button_3",
            text: "设置限时测试",
            type: "default",
            even: "changeTimetype",
        }, {
            name: "button_1",
            id: "button_1",
            text: "测试",
            even: "start",
        }]
    },
    //跳转
    start: function (e) {
        wx.navigateTo({
            url: '../test/test'
        })
    },
    /*
     * 获取滚动条选择的难度等级
     */
    bindChange: function (e) {
        const val = e.detail.value
        this.setData({
            level: this.data.levels[val[0]],
        })
        var level = this.data.level
        if (level == 1) { app.timetype =5, app.addorsub = 2, app.level = 1}
        if (level == 2) { app.timetype =10, app.addorsub = 0, app.level = 2}
        if (level == 3) { app.timetype = 10, app.addorsub = 2, app.level = 3}
        if (level == 4) { app.timetype = 10, app.addorsub = 2, app.level = 4}
        if (level == 5) { app.timetype = 20, app.addorsub = 0, app.level = 5}
        if (level == 6) { app.timetype = 20, app.addorsub = 0, app.level = 6}
        if (level == 7) { app.timetype = 20, app.addorsub = 2, app.level = 7}
        if (level == 8) { app.timetype = 20, app.addorsub = 1, app.level = 8}
        console.log(app.timetype + "-----" + app.addorsub + "--------" + app.level + "----" + level)
    },
    /*设置时间难度，默认值 timetype=5,addorsub=2
     *  timetype为数值，addorsub(0加法,1减法,2加减法)
     */
    changeTimetype: function (e) {
        wx.showActionSheet({
            itemList: ['5内加减法', '10内加法', '10内加减法', '20内加法', '20内加减法','20内减法'],
            success: function (res) {
                if (res.tapIndex == 0) { app.timetype = 5 ,app.addorsub = 2}
                if (res.tapIndex == 1) { app.timetype = 10, app.addorsub = 0};
                if (res.tapIndex == 2) { app.timetype = 10, app.addorsub = 2};
                if (res.tapIndex == 3) { app.timetype = 20, app.addorsub = 0};
                if (res.tapIndex == 4) { app.timetype = 20, app.addorsub = 2};
                if (res.tapIndex == 5) { app.timetype = 20, app.addorsub = 1};
                console.log(app.timetype + "-----" + app.addorsub + "--------" + app.level)
                if (res.cancel != true) {
                    wx.showToast({
                        title: '设置游戏设置题目类型',
                        icon: 'success',
                        duration: 2000
                    })
                }
            },
            fail: function (res) {
                console.log(res.errMsg)
            }
        })
    },

    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    }
})
