//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpeg',
      '/images/swiper02.jpeg',
      '/images/swiper03.png'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList:[
      {
        logo: "/images/pro_01.jpg",
        title: "一起来看好看的金玉姬",
        desc: "金鱼姬是一条活泼好动的小鱼，一次偶然的机会，它在涨潮时被冲进了玻璃瓶中无法脱身。"
    },
      {
        logo: "/images/pro_02.jpg",
        title: "《崖上的波妞》",
        desc: "是由宫崎骏导演、吉卜力工作室制作、长嶋一茂、天海佑希等人配音的长篇动画电影。"
      },
      {
        logo: "/images/pro_03.jpeg",
        title: "《悬崖上的金鱼公主》",
        desc: "该片讲述了和母亲生活在悬崖上的5岁小男孩宗介和一只拥有魔法血统的金鱼之间的故事。"
      }]
  },
  goDetail:function(e){
    console.log(e.currentTarget.dataset.index)
  },
  handleContact:function(e){
    console.log(e.path)
    console.log(e.query)
  }
})
