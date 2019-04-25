//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    blockList: [
      {
        title:"椿对鲲说",
            desc: "上天给我们生命，就是为了让我们创造奇迹。生命有轮回，爱亦有来生。穷尽一生，也只够爱一个人。从认识你，到和你性命相系，我从来没有后悔过。"
      },
      {
          title: "琥珀主对千寻说",
        desc: "千寻：我们还会在那里相逢吗？琥珀主：一定会的。千寻：一定噢。琥珀主：一定。你去吧，记得别回头噢。"
      },
      {
        title: "波妞对宗介说",
          desc: "信仰到底是什么呢，就是纵身一跃，就是我们跟神之间一个永远的约定，是舍弃旧的去开始新的生活；信仰就是从今以后，再也不要放开你的手。"
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
      phoneNumber: '18668411201',
    })
  }
})
