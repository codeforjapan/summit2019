<template>
  <div class="null-container">
    <!-- Header -->
    <header id="header" class="index_page">
      <div class="intro">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <div class="intro-text">
                <div class="mv_wrap" style="">
                  <div class="mv_elements">
                    <div class="mv_elements_wrap">
                      <div class="ie11_img_wrap">
                        <img src="/img/MV_logo_2.png">
                      </div>
                      <div class="mv_text">
                        <p class="event-name-row">CODE <span style="font-weight:100;">for</span> JAPAN<br>SUMMIT <span style="color:#fcee21;">2019</span></p>
                        <p class="event-name-col">CODE <span style="font-weight:100;">for</span> JAPAN SUMMIT <span style="color:#fcee21;">2019</span></p>
                        <p class="event-date-row">2019.9.28(sat.)-29(sun.)<br><span style="font-size:0.8em;">＠ 神田外語大学</span></p>
                        <p class="event-date-col">2019.9.28(sat.)-29(sun.)　<span style="font-size:0.8em;">＠ 神田外語大学</span></p>
                        <p class="app_dl"><a href="https://apps.apple.com/app/id1464997175" target="_blank"><img src="img/banner-appstore.png" style="height:40px; width:auto; margin-right:10px;" alt="App Storeからアプリをダウンロード"></a><a href="https://play.google.com/store/apps/details?id=org.code4nerima.c4js" target="_blank"><img src="img/banner-google-play.png" style="height:40px; width:auto;" alt="Google Playからアプリをダウンロード"></a></p>                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- About-C4JS Section -->
    <div id="about">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <div class="about-text">
              <h2 style="font-family: 'Raleway', sans-serif; font-weight:500; font-size:34px; color: #1e1c4d;">トキメキとテクノロジーで地域をつくる</h2>
              <!--<hr>-->
              <div><img src="img/kira_line.png"></div>
              <p>「私一人が動いても何も変わらない」<br>
                地域をよくしたいと思った時、そう感じることがあるかもしれません。<br>
                でも、その小さな一歩ににほかの誰かがときめき、賛同をしてやがてムーブメントになり、社会が変わっていきます。<br><br>
                Code for Japan Summitには、国内外の地域や行政で活躍する人たちや様々なテクノロジーが集まります。<br><br>
                今年のテーマは「Spark Joy!」<br>
                地域や仲間、テクノロジー。さまざまなことにときめき、活動している人たちの話を聞いて体感してみてください。</p>
            </div>
          </div>
          <div class="col-xs-12 col-md-6" style="padding-left: 30px; text-align: center;">
            <div class="about-img"><img src="img/last_year_pic.jpg" class="img-responsive" alt=""></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Restaurant Menu Section -->
    <div id="restaurant-menu">
      <div class="section-title text-center center">
        <div class="overlay">
          <div><img src="img/title_outline.png" alt="outline／開催概要"></div>
          <p>開催概要</p>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="menu-section">
              <div class="menu-item">
                <div class="menu-item-name"> 日時 </div>
                <div class="menu-item-description">
                  <span class="font-large">9月28日(土)・29日(日)</span><br>
                  受付は、AM9：30 より<nuxt-link to="/access#map-kuis">食堂「食神」</nuxt-link>にて
                </div>
              </div>
              <div class="menu-item" style="margin-bottom:0;">
                <div class="menu-item-name"> 会場 </div>
                <div class="menu-item-description">
                  神田外語大学
                  <nuxt-link to="/access#access"> >>アクセス</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <div class="menu-section">
              <div class="menu-item">
                <div class="menu-item-name"> 参加予定人数 </div>
                <div class="menu-item-description"> 1,000名 </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name"> 主催 </div>
                <div class="menu-item-description"><a href="https://www.code4japan.org/" target="_blank"> 一般社団法人　コード・フォー・ジャパン</a> </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name"> 共催 </div>
                <div class="menu-item-description"><a href="https://sites.google.com/view/civictechzenchiba/" target="_blank">Civic Tech Zen Chiba</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ticket Section -->
    <div id="contact" class="text-center">
      <div class="container">
        <div class="section-title text-center">
          <div><img src="img/title_ticket.png" alt="ticket／チケット"></div>
          <!--<h2>Ticket</h2>
          <hr>
          <p>チケット</p>-->
          <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <p class="s-read">Code for Japan Summit の参加にはチケットが必要です。詳細は、チケット販売ページをご覧ください！</p>
          </div>
        </div>
        <div class="col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
          <a href="https://cfjsummit2019.peatix.com/" target="_blank"><button type="button" class="btn btn-custom btn-lg btn-block">Peatixチケット購入ページへ<i class="material-icons" style="position: absolute; bottom: 19px; right: 10px;">open_in_new</i></button></a>
        </div>
      </div>
    </div>

    <!-- Session Section -->
    <div id="portfolio">
      <div class="section-title text-center center">
        <div class="overlay">
          <div><img src="img/title_program.png" alt="program／プログラム"></div>
          <p>プログラム</p>
        </div>
      </div>
      <div class="container">
        <div class="col-md-offset-2 col-md-8 col-md-offset-2 col-lg-offset-3 col-lg-6 col-lg-offset-3">
          <p class="s-read">
            様々なプレゼンテーションやパネルディスカッション、ワークショップを予定しています！</p>
        </div>
        <div class="col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
          <nuxt-link to="/session"><button type="button" class="btn btn-custom btn-lg btn-block">プログラムへ<i class="material-icons" style="position: absolute; bottom: 19px; right: 10px;">arrow_forward_ios</i></button></nuxt-link>
        </div>
      </div>
    </div>

    <!--Eve  Section -->
    <div id="eve" class="text-center">
      <div class="container">
        <div class="section-title text-center">
          <div><img src="img/title_eve.png" alt="Eve／前夜祭"></div>
          <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <p class="s-read">9/27(金)にCode for Japan Summit 2019の前夜祭を開催します！ 参加者によるLT大会、千葉の食材をふんだんに使った料理をお楽しみください！</p>
          </div>
          <div class="col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
            <a href="https://cfjsummit2019festival.peatix.com/" target="_blank"><button type="button" class="btn btn-custom btn-lg btn-block">前夜祭イベントページへ<i class="material-icons" style="position: absolute; bottom: 19px; right: 10px;">open_in_new</i></button></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Code of Conduct Section -->
    <div id="conduct">
      <div class="section-title text-center center">
        <div class="overlay">
          <div><img src="img/title_conduct.png" alt="Code of Conduct／行動規範"></div>
          <p>行動規範</p>
        </div>
      </div>
      <div class="container">
        <div class="col-md-offset-2 col-md-8 col-md-offset-2 col-lg-offset-3 col-lg-6 col-lg-offset-3">
          <p class="s-read">
            Code for Japanは誰もが快くイベントに参加できるようにCode of Conduct（行動規範）を定めています。<br>
            同意した上でCode for Japan Summitに参加していただくよう、お願いします。</p>
        </div>
        <div class="col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
          <a href="https://github.com/codeforjapan/codeofconduct/blob/master/README.md" target="_blank"><button type="button" class="btn btn-custom btn-lg btn-block">詳しく読む<i class="material-icons"  style="position: absolute; bottom: 19px; right: 10px;">open_in_new</i></button></a>
        </div>
      </div>
    </div>

    <!-- Accessibility Section -->
    <div id="accessibility" class="text-center">
      <div class="container">
        <div class="section-title text-center">
          <div><img src="img/title_accessibility.png" alt="accessibility／アクセシビリティ"></div>
          <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <p class="s-read">Code for Japan Summitではアプリ「UDトーク」を使用して音声認識と自動翻訳によるリアルタイム字幕を提供いたします。<br><br>お手元のスマホ／タブレットでご覧になる方は携帯用のバッテリーのご持参を推奨します。<br>その他、特別な配慮が必要な方はお申し出ください｡</p>
          </div>
          <div class="col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
            <a href="https://udtalk.jp" target="_blank"><button type="button" class="btn btn-custom btn-lg btn-block">UDトークへ<i class="material-icons"  style="position: absolute; bottom: 19px; right: 10px;">open_in_new</i></button></a>
          </div>
        </div>
      </div>
    </div>

    <div id="partner">
      <div class="container">
        <div class="section-title text-center">
          <div class="partner_title_box"><img src="img/title_partner.png" alt="partner／協賛"></div>
          <div class="partner-cat-box">
            <div class="partner_cat">プラチナパートナー</div>
            <div class="img_kira_line"><img src="img/kira_line.png"></div>
            <div class="row">
              <div class="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 img-centerling">
                <div class="partner_img_box"></div>
                <div class="partner_img_box"><img src="img/partner/logo_cybozu_Square_rgb.png"></div>
                <div class="partner_img_box"></div>
              </div>
            </div>
          </div>
          <div class="partner-cat-box">
            <div class="partner_cat">ゴールドパートナー</div>
            <div class="img_kira_line"><img src="img/kira_line.png"></div>
            <div class="row">
              <div class="col-md-offset-3 col-md-6 img-centerling-two">
                <div class="partner_img_box"><img src="img/partner/Image from iOS.jpg"></div>
                <div class="partner_img_box"><img src="img/partner/welmo.jpg"></div>
              </div>
            </div>
          </div>
          <div class="partner-cat-box">
            <div class="partner_cat">シルバーパートナー</div>
            <div class="img_kira_line"><img src="img/kira_line.png"></div>
            <div class="row">
              <div class="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 img-centerling">
                <div class="partner_img_box"><img src="img/partner/MIERUNE_logo02.png"></div>
                <div class="partner_img_box"><img src="img/partner/facebook_wordmark_June2015_blue.png"></div>
                <div class="partner_img_box"><img src="img/partner/stroly_logo_final_ol_y-01.png"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 img-centerling">
                <div class="partner_img_box"><img src="img/partner/ud_talk_ja.png"></div>
                <div class="partner_img_box"><img src="img/partner/iL3C_logo-01.png"></div>
                <div class="partner_img_box"><img src="img/partner/jidousyori.png"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 img-centerling">
                <div class="partner_img_box"><img src="img/partner/logo_white.png"></div>
                <div class="partner_img_box"><img src="img/partner/circle-griffin-01.jpg"></div>
                <div class="partner_img_box"><img src="img/partner/logo-wide-A-01.jpg"></div>
              </div>
            </div>
          </div>
          <div class="partner-cat-box">
            <div class="partner_cat">ブロンズパートナー</div>
            <div class="img_kira_line"><img src="img/kira_line.png"></div>
            <div class="row">
              <div class="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 img-centerling">
                <div class="partner_img_box"><img src="img/partner/150604ATL_logoEN_JP.jpg"></div>
                <div class="partner_img_box"><img src="img/partner/gaccom_inc_logo.png"></div>
                <div class="partner_img_box"><img src="img/partner/corporate_logo-01.jpg"></div>
              </div>
            </div>
          </div>
          <div class="partner-cat-box">
            <div class="partner_cat">メディアパートナー</div>
            <div class="img_kira_line"><img src="img/kira_line.png"></div>
            <div class="row">
              <div class="col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8 img-centerling">
                <div class="partner_img_box"></div>
                <div class="partner_img_box"><img src="img/partner/HOLG_Logo_image.png"></div>
                <div class="partner_img_box"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="container wacom_eve_bn">
        <div class="ali_cen"><a href="https://inkathon.bemyapp.com/jp" target="_blank"><img class="wacom_eve_bn_img" src="img/partner/WACOM_Homepage1880x1100.png"></a></div>
      </div>
    </div><!--#partner-->
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: null,
      title: this.title,
      link: [
        { rel: 'stylesheet', href: 'https://jaysalvat.github.io/vegas/releases/latest/vegas.min.css' }
      ]
    }
  },

  data() {
    return {
      title: 'Code for Japan Summit 2019 - Spark Joy!'
    }
  },

  mounted() {
    $('.intro').vegas({
      overlay: true,
      transition: 'flash',
      transitionDuration: 1000,
      delay: 3000,
      animation: 'random',
      animationDuration: 5000,
      slides: [
        {src: '/img/f4c3f41480300bd1409c5d3c39479b09_m.jpg'},
        {src: '/img/last_year_pic.jpg'},
        {src: '/img/CFJS2018-308.jpg'},
        {src: '/img/CFJS2018-135.jpg'},
        {src: '/img/CFJS2018-206.jpg'},
        {src: '/img/CFJS2018-356.jpg'},
      ]
    });
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log('index')
      const toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }
    })
  }
}
</script>
