// components/like/user/user.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userInfo: {
      type: Object,
      value: {},
      observer(newVal) {
        if (newVal.nickName) {
          this.setData({
            authStatus: true,
            name: newVal.nickName,
            image: newVal.avatarUrl
          })
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: '',
    image: '',
    authStatus: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleGetUserInfo(e) {
      if (!this.data.authStatus) {
        this.setData({
          name: e.detail.userInfo.nickName,
          image: e.detail.userInfo.avatarUrl,
          authStatus: true,
        })
      }
    }
  }
})