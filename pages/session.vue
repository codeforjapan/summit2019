<template>
  <div class="null-container">
    <!-- Header -->
    <header id="header" class="session_page">
      <div class="intro">
        <div class="overlay">
          <div class="container">
            <h1>Program</h1>
            <p>プログラム</p>
          </div>
        </div>
      </div>
    </header>

    <!-- About Section -->
    <div class="tab_wrap">
      <div class="box26">
        <span class="box-title">タグの凡例</span>
        <div class="hanrei_flex">
          <p>
            <span style="font-size:0.8em; display:inline-block; background:#fcee21; text-align:center; padding:0 5px;">WS</span>：ワークショップ
          </p>
          <p>
            <span style="font-size:0.8em; display:inline-block; background:#2f94a9; text-align:center; padding:0 5px; color:#fff;">プレゼン</span>：プレゼンテーション
          </p>
          <p>
            <span style="font-size:0.8em; display:inline-block; background:#ff4b00; text-align:center; padding:0 5px; color:#fff;">パネル</span>：パネルディスカッション
          </p>
          <p>
            <span style="font-size:0.8em; display:inline-block; background:#e9b6d2; text-align:center; padding:0 5px;  color:#000;">Keynote</span>：基調講演
          </p>
          <p>
            <span style="font-size:0.8em; display:inline-block; background:#1e1c4d; text-align:center; padding:0 5px; color:#fff;">その他</span>：その他
          </p>
        </div>
      </div>
    </div><!--.tab_wrap-->
    <div id="session" class="">
      <div class="tab_wrap">
        <input id="tab1" type="radio" name="tab_btn" checked>
        <input id="tab2" type="radio" name="tab_btn">
        <div class="tab_area">
          <label class="tab1_label" for="tab1">Day1</label>
          <label class="tab2_label" for="tab2">Day2</label>
        </div>

        <div class="panel_area">
          <div id="panel1" class="tab_panel">
            <session-panel :session="s" :key="s.id" v-for="s in day1"></session-panel>
          </div><!--#panel1-->

          <div id="panel2" class="tab_panel">
            <session-panel :session="s" :key="s.id" v-for="s in day2"></session-panel>
          </div><!--#panel2-->
        </div><!--.panel_area-->
      </div><!--.tab_wrap-->
    </div><!--#session-->

    <!--topへ戻る-->
    <div id="page_top_btn"><a href="#" class="page-scroll" @click.stop="scroll()"></a></div>
  </div>
</template>

<script>
import _ from 'lodash'

import SessionPanel from '~/components/session-panel'
import { toSession } from '~/logic/session'

export default {
  components: {
    SessionPanel
  },

  head() {
    return {
      title: 'プログラム',
    }
  },

  computed: {
    day1() {
      return _.sortBy(
          _.filter(this.mappedSessions, (s) => {
            return s.eventDate === '9/28' && !_.isNil(s.category)
          }), ['startTime']
      )
    },

    day2() {
      return _.sortBy(
          _.filter(this.mappedSessions, (s) => {
            return s.eventDate === '9/29' && !_.isNil(s.category)
          }), ['startTime']
      )
    },

    mappedSessions() {
      return _.map(this.sessions, (s) => {
        return toSession(s)
      })
    }
  },

  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log('session')
      const toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse('hide');
      }})
  },

  methods: {
    scroll() {
      this.$SmoothScroll(
          document.querySelector('#page-top'),
          400,
          null,
          null,
          'y'
      )
    }
  },

  async asyncData({ $axios }) {
    const sessions = await $axios.$get(`${process.env.sessionApiUrl}`)
    return { sessions }
  }
}
</script>

<style scoped>
#page_top_btn {
  display: none;
}
</style>
