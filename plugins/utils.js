import CryptoJS from 'crypto-js';
import NodeRSA from 'node-rsa'

/**
 * 基于localStorage实现的缓存
 * 在SSR中，created生命周期在服务端执行，node环境中没有localStorage所以会报错
 * 将需要使用localStorage的代码放到浏览器使用的生命周期(mounted)中。
 */
const Cache = {
  expires: 60 * 60,
  // 设置缓存
  setCache(key, value, ex){
    try {
      if (!localStorage) {
        return
      }
      if (!ex || isNaN(ex)) {
        ex = this.expires
      }
      const timeStamp = (new Date() - 1) + ex * 1000
      const cacheValue = { value: value, exp: timeStamp }
      localStorage.setItem(key, JSON.stringify(cacheValue))
    } catch (e) { console.error(e)}
  },
  // 清空缓存
  clearCache(key = null){
    try {
      if (!localStorage) {
        return
      }
      if (key == null) {
        localStorage.clear()
      }
      const value = this.getCache(key)
      if (!!value) {
        localStorage.removeItem(key)
      }
    } catch (e) {
      console.error(e)
    }
  },
  // 获取缓存
  getCache(key){
    try {
      if (!localStorage) {
        return null
      }
      let ret = localStorage.getItem(key)
      ret = JSON.parse(ret)
      const nowTime = new Date() - 1
      if (!ret) return null

      if (nowTime >= ret.exp) {
        localStorage.removeItem(key)
        return null
      }
      return ret.value
    } catch (e) { console.error(e)}
  }
}

const RSA = {
  RSA_PUBLIC_KEY: 'RSA_PUBLIC_KEY',
  setPublicKey(value) {
    if (!!value) {
      Cache.setCache(this.RSA_PUBLIC_KEY, value)
    }
  },
  getPublicKey(){
    return Cache.getCache(this.RSA_PUBLIC_KEY)
  },

  encrypt(data){
    const publicKey = this.getPublicKey()
    if (publicKey == null) {
      return data
    }

    let key = new NodeRSA('-----BEGIN PUBLIC KEY-----' + publicKey + '-----END PUBLIC KEY-----');
    // key.generateKeyPair(1024);
    key.setOptions({encryptionScheme: 'pkcs1'})
    // console.log(key2.decrypt(x,'utf8'))

    return key.encrypt(data, 'base64');
  },
  decrypt(){

  }
}

const AES = {
  AES_SECRET_KEY: 'AES_SECRET_KEY',
  initKey() {
    const key = sessionStorage.getItem(this.AES_SECRET_KEY)
    if (!!key) {
      // AES密钥在sessionStorage中存在
      return key
    }
    // AES密钥不存在
    const source = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";
    let sb = "";
    const maxPos = source.length;
    for (let i = 0; i < 16; i++) {
      sb += source.charAt(Math.floor(Math.random() * maxPos))
    }
    console.log("AES_KEY:" + this.AES_SECRET_KEY)
    // 将密钥保存到sessionStorage中
    sessionStorage.setItem(this.AES_SECRET_KEY, sb)
    return sb;
  },
  // 从sessionStorage中获取AES密钥
  getKey(){
    return sessionStorage.getItem(this.AES_SECRET_KEY)
  },
  // AES 加密
  encrypt(data){
    const secret_key = this.initKey();
    const key = CryptoJS.enc.Utf8.parse(secret_key);
    const src = CryptoJS.enc.Utf8.parse(data);
    const encrypted = CryptoJS.AES.encrypt(src, key,
      { mode : CryptoJS.mode.ECB, padding : CryptoJS.pad.Pkcs7 }
    )
    return encrypted.toString();
  },
  // AES 解密
  decrypt(encrypt_data){
    const secret_key = this.initKey();
    const key = CryptoJS.enc.Utf8.parse(secret_key);

    const decrypt = CryptoJS.AES.decrypt(encrypt_data, key,
      { mode : CryptoJS.mode.ECB, padding : CryptoJS.pad.Pkcs7 }
    )
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  },
}

const Token = {
  TOKEN_KEY: 'TOKEN_KEY',
  setToken(value){
    if (Cache.getCache(this.TOKEN_KEY)){
      return
    }
    Cache.setCache(this.TOKEN_KEY, value, 60 * 30)
  },
  getToken(){
    return Cache.getCache(this.TOKEN_KEY)
  },
  clearToken(){
    Cache.clearCache(this.TOKEN_KEY)
  }
}

function shallowCopy(obj) {
  const copy = {};
  // 只复制可遍历的属性
  for (let key in obj) {
    // 只复制本身拥有的属性
    if (obj.hasOwnProperty(key)) {
      copy[key] = obj[key];
    }
  }
  return copy;
}

function reqEncrypt(data){
  const copy_data = shallowCopy(data)
  const rsa_pk = RSA.getPublicKey()
  if (rsa_pk) {
    Object.keys(copy_data).forEach( key => {
      const value = copy_data[key] 
      if (typeof value === "string") {
        copy_data[key] = AES.encrypt(copy_data[key])
      }
    })
  }
  return copy_data
}

function encryptAES() {
  return RSA.encrypt(AES.getKey())
}

export default ({ app }, inject) => {

  const utils = { AES, RSA, Cache, Token, shallowCopy, reqEncrypt, encryptAES }
  inject('utils', utils)
}
