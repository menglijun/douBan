// pages/home/home.js
// 引入SDK核心类，js文件根据自己业务，位置可自行放置
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('home onLoad'),
        qqmapsdk = new QQMapWX({
            key: '3VHBZ-K75K6-OIDS5-MZSJG-6MNVK-JTFQZ'
        })
        let _this = this
        this.loadCity((city) =>{
            console.log("城市信息："+city)
            wx.request({
                url: 'https://api-much.yanwei365.com/mc/ca/v1/spu/features/rank/list',
                data: {pageIndex: 1, pageSize: 10},
                // header: {},
                // method: 'GET',
                // dataType: 'json',
                // responseType: 'text',
                success :(res)  =>{
                    console.log("后台数据"+res.data.data);
                    // this.setData(res.data)
                    // this.data.goods = res.data;
                    this.setData({
                        goods: res.data.data
                    });
                },
                success : function (res) {
                    console.log("后台数据"+res.data.data);
                    // this.setData(res.data)
                    // this.data.goods = res.data;
                    this.setData({
                        goods: res.data.data
                    });
                }.bind(this),
                success (res) {
                    console.log("后台数据"+res.data.data);
                    // this.setData(res.data)
                    // this.data.goods = res.data;
                    _this.setData({
                        goods: res.data.data
                    });
                },
                fail(res) {
                    console.log(res)
                },
                complete(res) {
                    console.log(res)
                }
            })
        })
    },
    loadCity:function (success) {
        //获取经纬度
        wx.getLocation({
            // type: 'wgs84',
            type: 'gcj02',
            success(res) {
                const latitude = res.latitude
                const longitude = res.longitude
                const speed = res.speed
                const accuracy = res.accuracy
                console.log("获取位置成功" + latitude)
                //调用接口
                qqmapsdk.reverseGeocoder({
                    location: {
                        latitude: latitude,
                        longitude: longitude
                    },
                    success: function (res) {
                        console.log(res)
                        let city = res.result.address
                        success(city)
                    },
                    fail: function (res) {
                        console.log(res)
                    },
                    complete: function (res) {
                        console.log(res)
                    }
                })
            },
            fail(res) {
                console.log("获取位置失败")
            }
        });
    }

})