// components/index/date/date.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    date: {
      type: Object,
      value: {},
      observer() {
        this.setData({
          newDate: {
            index: this.properties.date.index
          }
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    newDate: {},
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月',
      '十二月'
    ],
    month: '',
    year: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleMonth() {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth()
      this.setData({
        month: this.data.months[month],
        year: year
      })
    }

  },

  lifetimes: {
    ready() {
      this.handleMonth()
    }
  }

})