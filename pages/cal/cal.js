// pages/cal/cal.js
Page({

  /**
   * Page initial data
   */
  data: {
    numInput: 0,
    res: 0
  },
  handleInput(e){
    // console.log(e);
    // only way to set value right down there in miniprogram.
    console.log(e.detail.value);
    this.setData({ numInput : parseFloat(e.detail.value)});
  },
  handleBtnPlus(e){
    //获取自定义属性中的传参数。 operaion
    // const operation = e.urrentTarget.dataset.operation
    // console.log("In + click");
    // let cRes = this.data.res + this.data.numberInput;
    // console.log(cRes);
    if(!isNaN(this.data.numInput)){
      this.setData({ res: this.data.res + this.data.numInput });
    }
    this.setData({ numInput: 0 });
  },
  handleBtnMinus(e) {
    //获取自定义属性中的传参数。 operaion
    // const operation = e.urrentTarget.dataset.operation
    // console.log("In - click");
    if (!isNaN(this.data.numInput)) {
      this.setData({ res: this.data.res - this.data.numInput });
    }
    this.setData({ numInput: 0 });
  },
  handleBtnTime(e) {
    if (!isNaN(this.data.numInput)) {
      this.setData({ res: this.data.res * this.data.numInput });
    }
    this.setData({ numInput: 0 });
  },
  handleBtnDiv(e) {
    if (!isNaN(this.data.numInput)) {
      if (this.data.numInput != 0 || this.data.numInput!= "0"){
        this.setData({ res: this.data.res / this.data.numInput });
      }
    }
    this.setData({ numInput: 0 });
  },
  handleClean(e) {
    this.setData({ numInput: 0, res: 0});
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