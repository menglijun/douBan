// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('home onLoad')
        //获取经纬度
        wx.getLocation({
            type: 'wgs84',
            success (res) {
                const latitude = res.latitude
                const longitude = res.longitude
                const speed = res.speed
                const accuracy = res.accuracy
                console.log("获取位置成功" + res)
            },
            fail(res) {
                console.log("获取位置失败")
            }
        });
    },

})