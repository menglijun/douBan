// pages/login/login.js
Page({
    wechatLogin() {
        console.log('wechatLogin')
    },
    doubanLogin: function () {
        console.log('doubanLogin')
    },
    openAgreement: function () {
        wx.navigateTo({
            url:'/pages/agreement/agreement'
        })
    }
})