<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4 >
            <v-card class="elevation-5 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img :src="login_image" width="120" height="120">
                  <h2></h2>
                </div>

                <v-form>
                  <v-text-field
                    ref="username"
                    append-icon="person"
                    label="Login"
                    type="text"
                    :rules="[$rules.username]"
                    v-model="model.username" />
                  <v-text-field
                    ref="password"
                    v-model="model.password"
                    :append-icon="show ? 'visibility_off' : 'visibility'"
                    :type="show ? 'text' : 'password'"
                    label="Password"
                    :rules="[$rules.password]"
                    @click:append="show = !show" />
                  <v-layout>
                    <v-flex xs8>
                      <v-text-field
                          ref="captcha"
                          label="Captcha"
                          v-model="model.captcha"
                          :rules="[$rules.captcha]"
                          maxlength="4"
                          counter
                      />
                    </v-flex>
                    <v-flex xs4>
                      <img :src="captcha_url" @click="changeCaptcha" />
                    </v-flex>

                  </v-layout>
                  <v-checkbox label="记住我" v-model="model.rememberMe" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-google fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn>
                <v-spacer></v-spacer>

                <v-btn round @click="login"
                       class="primary" :loading="loading" >登陆</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    layout: 'login',
    data(){
      return {
        login_image: require('~/assets/images/login.jpg'),
        loading: false,
        captcha_url: this.$store.state.api.captcha_url,
        model: {
          username: '',
          password: '',
          captcha: '',
          rememberMe: false,
        },
        show: false
    }},


    mounted() {
      this.$store.dispatch('initRsaPublicKey')
    },

    methods: {
      // 刷新验证码
      changeCaptcha(){
        const url = this.captcha_url.split('=')[0]
        this.captcha_url = url + '=' + Math.random()
      },

      // 校验登陆信息
      verify() {
        let is_login = true;
        Object.keys(this.model).forEach( key => {
          if (this.$refs.hasOwnProperty(key)) {
            if (!this.$refs[key].validate(true)) {
              is_login = false
            }
          }
        })
        return is_login
      },

      login () {
        this.loading = true;
        if (this.verify()) {
          this.$store.dispatch('login', this.model)
        }
        // 箭头函数的this指向当前的函数上一级对象
        setTimeout(() =>{
          this.loading = false
          this.changeCaptcha()
        }, 1500)
      }
    }
  };
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
