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
    <div class="back-link">
      <nuxt-link to="/session">＜戻る</nuxt-link>
    </div>
    <div class="basic-info">
      <ul>
        <li>日時: {{ eventDateTime }}</li>
        <li>会場: <span>{{ room }}</span></li>
      </ul>
      <div class="tag">

      </div>
    </div>
    <div class="title">
      <h1>{{ title }}</h1>
      <div class="share-link">

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
  </div>
</template>

<script>
import _ from 'lodash'

import { toSession } from '~/logic/session'

export default {
  head() {
    return {
      title: 'プログラム',
    }
  },

  computed: {
    eventDateTime() {
      return `${this.session.eventDate} ${this.session.startTime} 〜 ${this.session.endTime}`
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
      return this.session.timeline.replace(/\r?\n/g, '<br>')
    },

    speakers() {
      return this.session.speakers
    }
  },

  methods: {
    speakerStyle(s) {
      return {
        backgroundImage: _.isNil(s.picture) ? null : `url(/authors/${s.picture})`
      }
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
.back-link {
  padding: 5px 15px;
  font-size: 16px;
}

.basic-info {
  padding: 5px 0 5px 15px;
  background: #A4A1A1 0% 0% no-repeat padding-box;

  color: #FFFFFF;
  font-size: 14px;
  line-height: 1.5;
}

.basic-info span {
  text-decoration: underline;
}

.title {
  padding: 15px 15px 10px;
  background: #F5F5F5 0% 0% no-repeat padding-box;
}

.title h1 {
  border-bottom: 1px solid #EEEEEE;
}

section {
  border-top: 1px solid #EEEEEE;
}

section h2 {
  margin: 0;
  padding: 20px 15px 10px;
  text-align: center;
  font-size: 14px;
  color: #777777;
}

section hr {
  margin: 0 auto;
  border: 3px solid #FCEE21;
  width: 40px;
}

section > p {
  margin: 0;
  padding: 20px 15px 30px;
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

</style>

