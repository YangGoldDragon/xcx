// components/like/like.js
import {
  Http
} from '../../../utils/http.js'

let http = new Http()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
      value: 0
    },
    isLike: {
      type: Boolean,
      value: false,
      observer() {
        if (this.properties.isLike) {
          this.setData({
            likeStatus: './images/like.png'
          })
        } else {
          this.setData({
            likeStatus: './images/noLike.png'
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeStatus: './images/noLike.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIsLike() {
      let num
      if (this.properties.isLike) {
        num = this.properties.num - 1
        this.setData({
          isLike: !this.properties.isLike,
          num: num
        })
      } else {
        num = this.properties.num + 1
        this.setData({
          isLike: !this.properties.isLike,
          num: num
        })
      }
    }
  }
})