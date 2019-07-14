const movie = Behavior({
  properties: {
    movie: {
      type: Array,
      value: []
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
    preloadMovieIndex() {
      wx.getStorage({
        key: 'movieIndex',
        success: (res) => {
          this.setData({
            movieIndex: res.data
          })
          console.log(this.data.movieIndex)
        },
        fail(err) {
          wx.setStorage({
            key: 'movieIndex',
            data: 0,
          })
        }
      })
    }
  },
  lifetimes: {
    ready() {
      this.preloadMovieIndex()
    }
  }
})

export {
  movie
}