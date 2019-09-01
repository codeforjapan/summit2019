<template>
  <div>
    <nav id="menu" class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <nuxt-link class="navbar-brand page-scroll" to="/#page-top"><img src="img/c4js_common_log.png"></nuxt-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><nuxt-link to="/#about" class="page-scroll">コンセプト</nuxt-link></li>
            <li><nuxt-link to="/#restaurant-menu" class="page-scroll">開催概要</nuxt-link></li>
            <li><nuxt-link to="/#contact" class="page-scroll">チケット</nuxt-link></li>
            <li><nuxt-link to="/session">プログラム</nuxt-link></li>
            <li><nuxt-link to="/#accessibility" class="page-scroll">アクセシビリティ</nuxt-link></li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
    </nav>
    <nuxt />
    <!--Footer-->
    <div id="footer">
      <div class="container-fluid text-center copyrights">
        <div class="col-md-8 col-md-offset-2">
          <div class="social">
            <ul>
              <li><a href="https://www.facebook.com/codeforjapan" target="_blank"><i class="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/codeforJP" target="_blank"><i class="fa fa-twitter"></i></a></li>
              <li style="background-color:#fff;"><a href="https://www.code4japan.org/" target="_blank"><i class="fa"><img src="img/logo_cfj.svg" alt="code for japan logo" style="height:26px;"></i></a></li>
            </ul>
          </div>
          <p>&copy; Code for Japan All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    const fullPath = `${process.env.baseUrl}${this.$route.fullPath}`

    return {
      link: [{ rel: 'canonical', href: fullPath }],
      meta: [{ hid: 'og:url', property: 'og:url', content: fullPath }]
    }
  }
}
</script>
