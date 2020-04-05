// components/stars/start.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    score:{
      type: Number,
      optionalTypes: [String],
      value: 0
    },
    flag: {
      type: Boolean,
      value: false
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    starts: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 给星星绑定点击事件
    tap(event){
      let flag = this.data.flag; // 只有评论页面中的星星才会触发该逻辑
      if (flag){
        let num = event.currentTarget.dataset.num + 1;
        this.setData({
          score: num
        });
        this.getStarts();
      }
    },
    // 将星星装进来
    pushStarts(num,halfFlag){
      for (let i=0; i < 5; i++){
        let item = `starts[${i}]`;
        if(i < num){
          this.setData({
            [item]: 'on'
          });
        }else{
          if (halfFlag){
            this.setData({
              [item]: 'half'
            });
          }else{
            this.setData({
              [item]: 'off'
            });
          }
        }
      }
    },
    // 设置星星的数量
    getStarts(){
      let score = this.data.score.toString();
      let half = false;
      // 判断是否是小数
      if (score.indexOf('.')>-1){ // 是
        let s = (score - Math.floor(score)).toFixed(2);
        
        if(s > 0.5){
          score = Math.ceil(score);
        } else if (s == 0.5){
          score = Math.floor(score);
          half = true;
        }else{
          score = Math.floor(score);
        }
      }
      this.pushStarts(score, half);
    }
  },
  ready(){
    this.getStarts();
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
      
    },
    hide: function () {
      // 页面被隐藏
    },
    resize: function (size) {
      // 页面尺寸变化
    }
  }
})
