// pages/docs/docs.js
Page({

  /**
   * Page initial data
   */
  data: {
    msg: "黄雅琪不是人",
    num: 10000,
    isChecked: true,
    isHuman: false,
    object01:{
      age:21,
      height:180,
      weight:"UNKNOWN",
      name: "黄雅琪"
    },
    list:[
      {
        id:0,
        name:"Aki Wong"
      },
      {
        id:1,
        name:"Sheng Zhan"
      },
      {
        id:2, 
        name: "Tze Wu"
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})