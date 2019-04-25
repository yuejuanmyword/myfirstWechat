//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpeg',
      '/images/swiper04.jpg',
      '/images/swiper05.jpeg',
      '/images/swiper06.jpeg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        logo: "/images/pro_01.jpeg",
        title: "湫和椿",
        desc: "不妨大胆一些，爱一个人，攀一座山，追一个梦。"
    },
      {
        logo: "/images/pro_02.jpeg",
        title: "千与千寻",
          desc: "在见到的第一次，就注定要羁绊终身，就注定像一棵树一样，成长在心里，生生世世。"
      },
      {
        logo: "/images/pro_03.jpeg",
        title: "金鱼公主",
          desc: "宗介跟波妞说：“别担心，我会保护你、好好照顾你。”"
      }]
  },
  goDetail:function(e){
    var id = e.currentTarget.dataset.index
    wx.setStorageSync("nowId", id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },
  handleContact:function(e){
    console.log(e.path)
    console.log(e.query)
  }
})
