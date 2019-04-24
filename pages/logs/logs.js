//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    blockList: [
      {
        title:"关于我们",
        desc: "《悬崖上的金鱼姬》是由吉卜力工作室制作，宫崎骏执导、编剧，奈良柚莉爱、山口智子、长岛一茂等配音的长篇动画电影，于2008年7月19日在日本首映。该片讲述了住在深海里、一心想变成人类的人鱼波妞与信守承诺的五岁男孩宗介之间的爱情故事。"
      },
      {
        title: "商务合作",
        desc: "藤本和曼玛莲的女儿。偷偷离开家后，被困在玻璃瓶里，后被宗介所救。宗介为她取名为“波妞”。因为舔了宗介的血液而成为半人鱼，任性的吵着要变成人类。喜欢火腿。会对讨厌的人喷水。"
      },
      {
        title: "联系我们",
        desc: "电话:17419448147 \n 微信:a15124461818"
      }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  phonecall: function(){
    wx.makePhoneCall({
      phoneNumber: '17519448147',
    })
  }
})
