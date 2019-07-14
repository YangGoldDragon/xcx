// components/book/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend: {
      type: Array,
      value: [],
      observer() {
        console.log(this.properties.recommend)
      }
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

  },
  lifetimes: {
  }
})