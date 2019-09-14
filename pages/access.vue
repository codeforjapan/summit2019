<template>
  <div class="null-container">
    <!-- Header -->
    <header id="header" class="session_page">
      <div class="intro">
        <div class="overlay">
          <div class="container">
            <h1>Access</h1>
            <p>アクセス</p>
          </div>
        </div>
      </div>
    </header>
    ​
    <!-- About Section -->
    <div id="access">
      <div id="map-wrap">
        <div class="container">
          <div class="gmap-section">
            <div class="centerling g-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.8286928447933!2d140.0407755156226!3d35.65659203892962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022818ddac3928d%3A0x6c13904944957c7!2z56We55Sw5aSW6Kqe5aSn5a2m!5e0!3m2!1sja!2sjp!4v1568185188892!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4 kaijyo">
              <div class="kaijyo_title">会場</div>
            </div>
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4 kaijyo_detail">
              <div class="kaijyo_name">神田外語大学</div>
              <div class="kaijyo_address">〒261-0014 千葉県千葉市美浜区若葉1-4-1</div>
            </div>
            <div class="col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-lg-offset-4 col-lg-4">
              <a href="https://www.kandagaigo.ac.jp/kuis/main/access/" target="_blank"><button type="button" class="btn btn-custom btn-lg btn-block">神田外語大学アクセスページへ<br>(バス時刻表リンクもあります)<i class="material-icons" style="position: absolute; bottom: 25px; right: 10px;">open_in_new</i></button></a>
            </div>
          </div><!--.gmap-section-->
        </div><!--.container-->
      </div><!--#map-wrap-->
      ​
      <div id="map-kuis">
        <div class="container">
          <div class="access-section">
            <h2>構内案内図</h2>
            <hr>
            <div class="centerling"><img src="img/KUISMap.svg"></div>
          </div>
        </div><!--.container-->
      </div>
      ​
      <div id="map_8">
        <div class="container">
          <div class="access-section">
            <h2>8号館内部</h2>
            <hr>
            <div class="centerling">
              <img class="map-pc" src="img/8goukan.svg">
              <img class="map-sp" src="img/8goukan-02.svg">
            </div>
          </div>
        </div><!--.container-->
      </div>

      <div id="map_5">
        <div class="container">
          <div class="access-section">
            <h2>ミレニアムハウス（5号館）内部</h2>
            <hr>
            <div class="centerling">
              <img class="map-pc" src="img/5goukan.svg">
              <img class="map-sp" src="img/5goukan-02.svg">
            </div>
          </div>
        </div><!--.container-->
      </div>

      <div id="map_syokujin">
        <div class="container">
          <div class="access-section">
            <h2>食神内部</h2>
            <hr>
            <div class="centerling">
              <img class="map-pc" src="img/syokujin.svg">
              <img class="map-sp" src="img/syokujin-02.svg">
            </div>
          </div>
        </div><!--.container-->
      </div>
    </div><!--#access-->

    <!--topへ戻る-->
    <div id="page_top_btn"><a href="#page-top" class="page-scroll"></a></div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log('session')
      const toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }})
  }
}
</script>
<style>
@media (min-width: 1200px){
  #access .container {
    width: 970px;
  }
  #access #map-wrap .container {
    width: 1170px;
  }
}
#access {
  padding: 30px 0 50px 0;
  font-family: 'Noto Sans JP', sans-serif;
}
#map_KUIS, #map_8, #map_5, #map-wrap{
  border-bottom:1px solid #eee;
}
#access .container{
  padding-bottom:30px;
}
#access #map-wrap .container {
  padding-right: 0;
  padding-left: 0;
}
#access h2 {
  margin: 0;
  padding: 50px 15px 10px;
  text-align: center;
  font-family: Noto Sans JP,sans-serif;
  font-size: 18px;
  color: #777;
}
#access h2 + hr {
  margin: 0 auto;
  border: 0;
  border-bottom: 3px solid #fcee21;
  width: 40px;
}
.centerling{
  text-align:center;
}
@media (max-width: 680px) {
  .g-map {
    padding-bottom: 56.25% !important;
    width:auto !important;
  }

  .g-map iframe {
    height: 100% !important;
    width: 100% !important;
  }
}
.g-map {
  height: 0;
  overflow: hidden;
  padding-bottom: 400px;
  position: relative;
  width:680px;
  margin:0 auto;
}

.g-map iframe {
  position: absolute;
  left: 0;
  top: 0;
  height: 100% !important;
  width: 100% !important;
}
#access .btn-custom {
  font-size:14px;
}
.kaijyo{
  margin-top:20px;
  margin-bottom:10px;
  border-bottom:1px solid #eee;
}
.kaijyo_title{
  font-size:16px;
  font-weight:600;
}
.kaijyo_detail{
}
.kaijyo_name{
  font-size:16px;
  line-height:2em;
}
.kaijyo_address{
  line-height:1.5em;
}
.wrap{
  overflow: hidden;
}
img.map-pc {
  display:block !important;
}
img.map-sp {
  display:none !important;
}
@media only screen and (max-width: 991px){
  img.map-pc {
    display:none !important;
  }
  img.map-sp {
    display:block !important;
  }
}
div.hosoku{
  margin-right:15px;
  margin-left:15px;
  margin-bottom:15px;
  padding:15px;
  border:2px solid #eee;
}
div.hosoku p{
  font-size:13px;
  text-align:left;
  margin:0 0 3px 0;
}
div.hosoku p span{
  background-color: #999;
  color:#fff;
  display:inline-block;
  text-align:center;
  padding:0 5px;
}
/*開催概要　日付大きく*/
.font-large{
  font-size:18px;
  line-height:2em;
  display:inline-block;
}
</style>
