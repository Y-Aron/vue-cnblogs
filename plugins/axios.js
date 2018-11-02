import toastr from './toastr'
export default function ({ app, $axios, redirect}) {

  // 请求拦截器
  $axios.onRequest( config => {
    // 设置token
    const token = app.$utils.Token.getToken()
    if (!!token) {
      config.headers.authorization = `Bearer ${token}`
    }
    config.data = app.$utils.reqEncrypt(config.data)

    config.headers.AES_SECRET_KEY = app.$utils.encryptAES()

    console.log(config)
    return config
  })

  function showToastr (respData) {
    // 清空所有消息提示框
    toastr.removeAll()
    if (!respData.status) {
      toastr.error({
        title: 'API请求失败~',
        message: respData.message
      })
    } else {
      toastr.success({
        title: 'API请求成功~',
        message: respData.message
      })
    }
  }

  // 响应拦截器
  $axios.onResponse( resp => {
    const respData = resp.data

    if (respData.hasOwnProperty('status')) {
      showToastr(respData)
    }
    // 校验刷新token
    const token = resp.headers.authorization
    if (token) {
      app.$utils.Token.setToken(token)
    }

    return resp.data;
  })

  $axios.onError( error =>{
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
