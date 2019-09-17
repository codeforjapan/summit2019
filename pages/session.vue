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

    <div id="timetable">
      <div class="tab_wrap">
        <input id="tab1" type="radio" name="tab_btn" checked>
        <input id="tab2" type="radio" name="tab_btn">
        <div class="tab_area">
          <label class="tab1_label" for="tab1">Day1</label>
          <label class="tab2_label" for="tab2">Day2</label>
        </div>

        <div class="panel_area">
          <div id="panel1" class="tab_panel">
            <div class="hosoku">
              <p>※受付 ⇒9:30- 食神で開始<a href="access.html#map_KUIS">　>>構内案内図</a></p>
              <p><span>★１</span> ⇒10:00-10:20 Opening Talk</p>
              <p><span>★２</span> ⇒11:10-11:30 協賛企業LT / 11:30-11:45 セッション紹介</p>
              <p><span>★３</span> ⇒17:45-18:15 Closing Talk</p>
              <p>※懇親会 ⇒18:30-20:00 食神で開催<a href="access.html#map_KUIS">　>>構内案内図</a></p></p>
            </div>
            <div class="table-wrapper">
              <table>
                <thead>
                <tr>
                  <th class="tt_place"><div>　</div></th>
                  <th class="tt_time th_hosoku"></th>
                  <th class="tt_time">Keynote<br><span class="time_small">10:20-11:10</span></th>
                  <th class="tt_time th_hosoku"></th>
                  <th class="tt_time">ランチSession<br><span class="time_small">12:00-13:00</span></th>
                  <th class="tt_time">ミニSession1<br><span class="time_small">13:15-14:30</span></th>
                  <th class="tt_time">ミニsession2<br><span class="time_small">14:45-16:00</span></th>
                  <th class="tt_time">ミニsession3<br><span class="time_small">16:15-17:30</span></th>
                  <th class="tt_time th_hosoku"></th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="r in roomSet(day1)">
                    <th class="tt_place">
                      <div>
                        <nuxt-link to="/access">
                          {{ r }}<br>
                          <img :src="iconPath(r)">
                        </nuxt-link>
                      </div>
                    </th>
                    <td class="tt_hosoku"><div>★１</div></td>
                    <session-frame :session="findSession(day1Map, r, '10:20')" />
                    <td class="tt_hosoku"><div>★２</div></td>
                    <session-frame :session="findSession(day1Map, r, '12:00')" />
                    <template v-if="needColspan(day1Map, r, '13:15')">
                      <session-frame :session="findSession(day1Map, r, '13:15')" :colspan="2" />
                    </template>
                    <template v-else>
                      <session-frame :session="findSession(day1Map, r, '13:15')" />
                      <session-frame :session="findSession(day1Map, r, '14:45')" />
                    </template>
                    <session-frame :session="findSession(day1Map, r, '16:15')" />
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div><!--#panel1-->

          <div id="panel2" class="tab_panel">
            <div class="hosoku">
              <p>※受付 ⇒9:30- 食神で開始<a href="access.html#map_KUIS">　>>構内案内図</a></p>
              <p><span>★１</span> ⇒10:00-10:20 Opening Talk</p>
              <p><span>★２</span> ⇒11:10-11:30 協賛企業LT／11:30-11:45 セッション紹介</p>
              <p><span>★３</span> ⇒17:30-18:00 Closing Talk</p>
            </div>
            <div class="table-wrapper">
              <table>
                <thead>
                <tr>
                  <th class="tt_place"><div>　</div></th>
                  <th class="tt_time th_hosoku"></th>
                  <th class="tt_time">Keynote<br><span class="time_small">10:20-11:10</span></th>
                  <th class="tt_time th_hosoku"></th>
                  <th class="tt_time">ランチSssion<br><span class="time_small">12:00-13:00</span></th>
                  <th class="tt_time">ミニSession1<br><span class="time_small">13:15-14:30</span></th>
                  <th class="tt_time">ミニsession2<br><span class="time_small">14:45-16:00</span></th>
                  <th class="tt_time">ミニsession3<br><span class="time_small">16:15-17:30</span></th>
                  <th class="tt_time th_hosoku"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="r in roomSet(day2)">
                  <th class="tt_place">
                    <div>
                      <nuxt-link to="/access">
                        {{ r }}<br>
                        <img :src="iconPath(r)">
                      </nuxt-link>
                    </div>
                  </th>
                  <td class="tt_hosoku"><div>★１</div></td>
                  <session-frame :session="findSession(day2Map, r, '10:20')" />
                  <td class="tt_hosoku"><div>★２</div></td>
                  <session-frame :session="findSession(day2Map, r, '12:00')" />
                  <session-frame :session="findSession(day2Map, r, '13:15')" />
                  <session-frame :session="findSession(day2Map, r, '14:45')" />
                  <session-frame :session="findSession(day2Map, r, '16:15')" />
                  <td></td>
                </tr>
                </tbody>
              </table>
            </div>
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

import SessionFrame from '~/components/session-frame'
import { toSession } from '~/logic/session'

const roomMap = {
  '食神': 'rollcake',
  '5号館ミレニアムハウス': 'pancake',
  '8号館8-106': 'cookie',
  '8号館8-107': 'popcorn',
  '8号館8-109': 'icecandy',
  '8号館8-111': 'cupcake',
  '8号館8-112': 'candy',
  '8号館8-116': 'crepe-g',
  '8号館 The Stage': 'sundae',
  '8号館 The WorkShop': 'pudding',
  '8号館 Interactive Space': 'softcream',
  '8号館 FocusSpace': 'chocolate'
}

export default {
  components: {
    SessionFrame
  },

  head() {
    const title = 'プログラム'

    return {
      title: title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
      ]
    }
  },

  computed: {
    day1() {
      return this.availableSessions('9/28')
    },

    day1Map() {
      return this.sessionMap('9/28')
    },

    day2() {
      return this.availableSessions('9/29')
    },

    day2Map() {
      return this.sessionMap('9/29')
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
    },

    availableSessions(targetDate) {
      return _.filter(this.mappedSessions, (s) => {
        return s.eventDate === targetDate && !_.isNil(s.category)
      })
    },

    sessionMap(targetDate) {
      const sessionMap = {}

      _.forEach(this.availableSessions(targetDate),
          (s) => {
            sessionMap[s.room] = sessionMap[s.room] || {}
            sessionMap[s.room][s.startTime] = s
          }
      )

      return sessionMap
    },

    iconPath(room) {
      return `img/sweets_ico/${roomMap[room]}.svg`
    },

    roomSet(sessions) {
      const filteredRooms = _.uniq(_.map(sessions, (s) => s.room))
      return _.filter(Object.keys(roomMap), (r) => filteredRooms.includes(r))
    },

    findSession(sessions, room, startTime) {
      const sessionsByRoom = sessions[room]
      return sessionsByRoom ? sessionsByRoom[startTime] : undefined
    },

    needColspan(sessions, room, startTime) {
      const session = this.findSession(sessions, room, startTime)
      return session && session.id === 8
    }
  },

  async asyncData({ $axios }) {
    const sessions = await $axios.$get(`${process.env.sessionApiUrl}`)
    return { sessions }
  }
}
</script>

<style scoped>
#timetable {
  padding: 20px 0 40px 0;
}

@media screen and (min-width:681px) and (max-width: 1069px) {
  #timetable .tab_wrap {
    width: 680px !important;
  }
  #timetable table {
    width: 100% !important;
  }
  th.tt_place{
    width:80px !important;
  }
  #timetable table td div{
    display: -webkit-box !important;
    overflow: hidden !important;
    -webkit-line-clamp: 7 ;
    -webkit-box-orient: vertical;
  }
}
@media (max-width: 680px) {
  #timetable .container {
    width: 100%;
  }
  #timetable .tab_wrap {
    width: 100% !important;
  }
  #timetable .table-wrapper{
    width: 100p% !important;
    overflow:scroll !important;
  }
  #timetable table {
    width: 680px !important;
  }
  th.tt_place{
    width:80px !important;
  }
  #timetable table td div{
    display: -webkit-box !important;
    overflow: hidden !important;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
}
#timetable .tab_wrap {
  width: 1070px;
  margin: 0 auto;
  font-family: 'Noto Sans JP', sans-serif;
}
#timetable table {
  height:100% !important;
  border-collapse: separate;
  margin: 0 auto;
  padding: 0;
  width: 1040px;
  table-layout: fixed;
}
#timetable table th,#timetable table td {
  border-bottom: 1px solid #eee;
  border-right: 1px solid #eee;
  overflow-wrap : break-word;
  white-space:normal !important;
}
#timetable table td.tt_key,
#timetable table td.tt_ws,
#timetable table td.tt_presen,
#timetable table td.tt_panel-dis,
#timetable table td.tt_other,
#timetable table td.tt_hosoku {
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,.3));
  color:#fff;
}
td.tt_hosoku div{
  padding: 10px 9px !important;
  font-size: 12px;
  border: 1px solid #eee;
  background-color: #999;
  width:100% !important;
  height:100% !important;
  margin:0 !important;
}
th.th_hosoku{
  width: 45px;
}
th.tt_time{
  text-align:center;
}
th.tt_place{
  width:110px;
  text-align:center;
  padding: 0 !important;
  border:0 !important;
}
th.tt_place img{
  width:35px;
  height:35px;
}
th.tt_place a{
  color:#777;
  text-decoration:underline;
}
th.tt_place a:hover{
  opacity:0.7;
}
.time_small{
  font-weight:400;
  font-size:11px;
}
#timetable table td{
  vertical-align:top;
  width:100% !important;
  height:100% !important;
  padding:0 !important;
}
#timetable table td div{
  height:100% !important;
}
#timetable table th:first-child {
  /* 横スクロール時に固定する */
  position: -webkit-sticky;
  position: sticky;
  left: 0;
  z-index: 2;
  background-color:#fff;
}
#timetable table thead th:first-child {
  /* ヘッダー行内の他のセルより手前に表示する */
  z-index: 2;
  height:100%;
}
#timetable .box26 {
  margin: 2em 0 0;
}
th.tt_place div{
  width:100% !important;
  height:100% !important;
  border-bottom:1px solid #eee;
  border-right:1px solid #eee;
  padding: 0.35em 0;
}

#page_top_btn {
  display: none;
}
</style>
