// components/index/movie/movie.js
import {
  movie
} from '../behavior/movie.js'

Component({
  behaviors: [movie],
  /**
   * 组件的属性列表
   */
  properties: {
    movieIndex: {
      type: Number,
      value: 0,
      observer() {
        this.setData({
          movieIndex: this.properties.movieIndex
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    icons: [
      './images/movie.png',
      './images/music.png',
      './images/poem.png'
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {}
})