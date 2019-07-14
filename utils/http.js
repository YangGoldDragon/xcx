import {
  config
} from '../config.js'

class Http {
  request(params) {
    if (!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: `${config.apiBaseUrl}${params.url}`,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        appkey: config.appkey
      },
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          params.success(res.data.data)
        } else {
          wx.showToast({
            title: '网络错误！',
            icon: 'loading',
            duration: 2000
          })
        }
      },
      fail(err) {
        wx.showToast({
          title: '网络错误！',
          icon: 'loading',
          duration: 2000
        })
      }
    })
  }
}

export {
  Http
}