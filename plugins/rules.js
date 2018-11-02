import Vue from 'vue'

export default Vue.prototype.$rules = {
  username: value => !!value || '请输入用户名',

  password: value => !!value || '请输入密码',

  captcha: value => !!value || '请输入验证码'

}
