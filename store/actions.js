
export default {
  login({state}, userDetails) {
    return this.$axios.post(state.api.login, userDetails)
      .then( resp => {
        // 登陆成功处理
        if (resp.code === 205) {
          console.log('登陆成功~')
          // this.$router.push({
          //   path: '/admin/index'
          // })
        }
      })
  },
  // 初始化RSA publicKey
  initRsaPublicKey({state}) {
    if (!!this.$utils.RSA.getPublicKey()){
      return
    }
    this.$axios.get(state.api.rsa_pk).then( resp => {
      this.$utils.RSA.setPublicKey(resp)
    })
  }
}
