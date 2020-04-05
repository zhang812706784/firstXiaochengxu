// components/lesson/lesson.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    lesson:{
      type: Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    lessonTap(event){
      let name = event.currentTarget.dataset["lessonname"];
      this.triggerEvent('customBtn', name);
    }
  }
})
