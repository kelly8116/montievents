// import Vue from 'vue'

export default {
  name: 'vueFb',
  created () {
    let FB
    const vueFb = {}
    vueFb.install = function install (Vue, options) {
      (function (d, s, id) {
        var js
        var fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) { return }
        js = d.createElement(s)
        js.id = id
        js.src = '//connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
        console.log('setting fb sdk')
      }(document, 'script', 'facebook-jssdk'))

      window.fbAsyncInit = function onSDKInit () {
        FB.init(options)
        FB.AppEvents.logPageView()
        Vue.FB = FB
        window.dispatchEvent(new Event('fb-sdk-ready'))
      }
      Vue.FB = undefined
    }

    // Vue.use(vueFb, {
    //   appId: '2209799002607600',
    //   autoLogAppEvents: true,
    //   xfbml: true,
    //   version: 'v3.2'
    // })
    console.log('testing1212')
  }
}
