<template>
  <div class="null-container">
    <!-- Header -->
    <header id="header" class="session_page">
      <div class="intro">
        <div class="overlay"></div>
      </div>
    </header>
    <div class="content-container">
      <div class="back-link">
        <nuxt-link to="/session">＜戻る</nuxt-link>
      </div>
      <div class="basic-info">
        <ul>
          <li>
            <i class="fa fa-clock-o"></i>
            日時： {{ eventDateTime }}
          </li>
          <li>
            <i class="fa fa-map-marker"></i>
            会場：
            <nuxt-link :to="linkWithAnchor(room)">
              {{ room }}
            </nuxt-link>
          </li>
        </ul>
        <div :class="[tagClass, categoryClass]">
          <div class="tag" v-html="category.label" />
        </div>
      </div>
      <div class="title">
        <h1>{{ title }}</h1>
        <div class="share-link">
          <div class="label-area">
            シェア &gt;
          </div>
          <social-sharing
            :url="url"
            twitter-user="codeforJP" hashtags="cfjsummit2019" network-tag="a"
            inline-template>
            <div class="social-icon">
              <network network="facebook">
                <i class="fa fa-facebook fa-lg"></i>
              </network>
              <network network="twitter">
                <i class="fa fa-twitter fa-lg"></i>
              </network>
            </div>
          </social-sharing>
        </div>
      </div>
      <section id="description">
        <h2>概要</h2>
        <hr>
        <p><span v-html="description"></span></p>
      </section>
      <section id="timeline">
        <h2>流れ</h2>
        <hr>
        <p><span v-html="timeline"></span></p>
      </section>
      <section id="speaker">
        <h2>登壇者</h2>
        <hr>
        <div class="speaker" v-for="s in speakers">
          <div class="picture">
            <div class="picture-box" :style="speakerStyle(s)"></div>
          </div>
          <div class="profile">
            <h3>{{ s.name }}</h3>
            <p>{{ s.profile }}</p>
          </div>
        </div>
      </section>
      <section id="movie" v-if="hasMovie">
        <h2>動画</h2>
        <hr>
        <div class="movie-container">
          <youtube :video-id="movieId" :player-vars="movieOptions" ref="youtube" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

import { toSession } from '~/logic/session'
import { toCategory } from '~/logic/category'
import { linkWithAnchor } from '~/logic/room'

export default {
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.title },
      ]
    }
  },

  data() {
    return {
      tagClass: 'basic-info-tag',
      movieOptions: {
        autoplay: 0,
        controls: 0
      }
    }
  },

  computed: {
    eventDateTime() {
      return `${this.session.eventDate} ${this.session.startTime} 〜 ${this.session.endTime}`
    },

    url() {
      return `${process.env.baseUrl}${this.$route.path}`
    },

    room() {
      return this.session.room
    },

    title() {
      return this.session.title
    },

    description() {
      return this.session.description.replace(/\r?\n/g, '<br>')
    },

    timeline() {
      return this.session.timeline ? this.session.timeline.replace(/\r?\n/g, '<br>') : ''
    },

    category() {
      return toCategory(this.session.category)
    },

    categoryClass() {
      return this.category.class
    },

    speakers() {
      return this.session.speakers
    },

    movieId() {
      return this.session.movieId
    },

    hasMovie() {
      return this.session.movieId != null
    }
  },

  methods: {
    speakerStyle(s) {
      return {
        backgroundImage: _.isNil(s.picture) ? null : `url(/authors/${s.picture})`
      }
    },

    linkWithAnchor(room) {
      return linkWithAnchor(room)
    }
  },

  async asyncData({ $axios, params, payload }) {
    if (payload) {
      return { session: toSession(payload) }
    }

    const sessions = await $axios.$get(`${process.env.sessionApiUrl}`)
    const session = _.find(sessions, (s) => { return s.id == params.id})

    return { session: toSession(session) }
  }
}

</script>

<style>
.null-container {
  font-family: 'Noto Sans JP', sans-serif;
}

@media screen and (min-width: 768px) {
  .content-container {
    width: 680px;
    margin: 0 auto;
  }
}

header .intro {
  height: 95px;
}

header .overlay {
  height: 100%;
}

.back-link {
  padding: 5px 15px;
  font-size: 14px;
  line-height: 1.5;
}

.back-link a {
  color: #777777;
}

.back-link a:hover {
  color: #777777B3;
}

.basic-info {
  position: relative;
  padding: 5px 0 5px 15px;
  height: 55px;
  background: #A4A1A1 0% 0% no-repeat padding-box;

  color: #FFFFFF;
  font-size: 14px;
  line-height: 1.5;
}

.basic-info ul {
  margin: 0;
}

.basic-info i {
  display: inline-block;
  width: 15px;
  height: 15px;
}

.basic-info a {
  color: #FFF;
  text-decoration: underline;
}

.basic-info .basic-info-tag {
  position: absolute;
  right: 0;
  top: 0;
  width: 8em;
  padding: 0 7px;
  height: 55px;
  line-height: 55px;
}

.basic-info-tag .tag {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.85em;
  line-height: normal;
}

.title {
  padding: 15px 15px 10px;
  background: #F5F5F5 0% 0% no-repeat padding-box;
}

.title h1 {
  margin: 0;
  padding: 0 0 5px;
  font-size: 18px;
  line-height: 1.5;
  border-bottom: 1px solid #EEEEEE;
  font-weight: 400;
}

.share-link {
  position: relative;
  height: 35px;
}

.label-area {
  position: absolute;
  top: 0;
  right: 98px;

  font-size: 12px;
  line-height: 48px;
}

.social-icon {
  position: absolute;
  top: 0;
  right: 0;
}

.social-icon a {
  display: block;
  float: left;
  margin: 5px 10px 5px 0;
  padding: 0;
  color: #2F94A9;
}

.social-icon i {
  width: 35px;
  height: 35px;
  margin: 0;
  border: 1px solid #2F94A9;
  border-radius: 50%;
  line-height: 35px;
  text-align: center;
}

.social-icon i:before {
  padding: 0;
  line-height: 35px;
}

.social-icon a:hover i {
  background: #B0CDD3;
}

section {
  border-top: 1px solid #EEEEEE;
}

@media screen and (min-width: 768px) {
  section {
    width: 680px;
    margin: 0 auto;
  }
}

section h2 {
  margin: 0;
  padding: 20px 15px 10px;
  text-align: center;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 14px;
  color: #777777;
}

section hr {
  margin: 0 auto;
  border: 0;
  border-bottom: 3px solid #FCEE21;
  width: 40px;
}

section > p {
  margin: 0;
  padding: 20px 65px 30px;
}

.speaker {
  display: flex;
  margin: 0;
  padding: 20px 15px 30px;
}

.speaker .picture {
  margin: 0;
  padding: 5px 10px 0 0;
  width: 110px;
}

.speaker .picture-box {
  width: 100px;
  height: 100px;
  margin:0 auto;
  background:url(/img/nai_toki.jpg) center center;
  background-size:cover;
}

.speaker .profile {
  margin: 0;
  padding: 5px 0 20px;
}
.speaker .profile h3 {
  margin: 0;

  font-size: 16px;
  line-height: 1.5;
  color: #777777;
}

.speaker .profile p {
  font-size: 12px;
  line-height: 1.5;

  padding: 6px 0 20px;
}

.movie-container {
  padding: 30px 15px;
}

.movie-container iframe {
  width: 100%;
  max-width: 650px;
}

</style>

