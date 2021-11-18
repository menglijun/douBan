// pages/mine/mine.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        items: [
            {
                icon: "ic_cat_movie.png",
                title: "观影分析",
                num: 5,
                state: "看过",
                mark: "标记10部影片\n开启观影分析"
            },
            {
                icon: "ic_cat_book.png",
                title: "读书分析",
                num: 6,
                state: "读过",
                mark: "标记10本书\n开启读书分析"
            },
            {
                icon: "ic_cat_music.png",
                title: "音乐分析",
                num: 9,
                state: "听过",
                mark: "标记10张唱片\n开启音乐分析"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    },
    begin:function (event) {
        event.currentTarget.id
        const index = event.currentTarget.dataset.index
        if (index == 0){
            console.log('位置1 = '+index)
        }else if (index == 1){
            console.log('位置2 = '+index)
        }else if (index == 2){
            console.log('位置3 = '+index)
        }

        console.log(event)
    }
})