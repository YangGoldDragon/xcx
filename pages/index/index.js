import {
  Http
} from '../../utils/http.js'

let http = new Http()

Page({
  data: {
    num: 0,
    isLike: true,
    movie: {},
    date: {},
    movieIndex: 0
  },
  onLoad() {
    http.request({
      url: '/index/latest',
      success: (res) => {
        this.setData({
          num: res.num,
          isLike: res.isLike,
          movie: res.movie,
          date: {
            index: res.index
          }
        })
      }
    })
  },
  handleMovieIndex(index) {
    this.setData({
      movieIndex: index
    })
    wx.setStorage({
      key: 'movieIndex',
      data: this.data.movieIndex,
    })
  },
  handleLeft() {
    if (this.data.movieIndex === 0) {
      const index = this.data.movie.length - 1
      this.handleMovieIndex(index)
    } else {
      const index = this.data.movieIndex - 1
      this.handleMovieIndex(index)
    }
  },
  handleRight() {
    const index = this.data.movie.length - 1
    if (this.data.movieIndex === index) {
      this.handleMovieIndex(0)
    } else {
      const index = this.data.movieIndex + 1
      this.handleMovieIndex(index)
    }
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '龙你太美',
      path: '/page/index/index'
    }
  }
})