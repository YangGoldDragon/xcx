// components/index/slide/slide.js
import {
  movie
} from '../behavior/movie.js'


Component({
  behaviors: [movie],
  /**
   * 组件的属性列表
   */
  properties: {
    newMovieIndex: {
      type: Number,
      value: 0,
      observer() {
        this.setData({
          movieIndex: this.properties.newMovieIndex
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    movieIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    slideLeft() {
      this.triggerEvent('slideLeft')
    },
    slideRight(){
      this.triggerEvent('slideRight')

    }
  }
})