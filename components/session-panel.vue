<template>
  <div :id="sessionId" class="container">
    <div class="session_header">
      <div class="session_title">{{ title }}</div>
      <span :class="[tagClass, categoryClass]">{{ category.label }}</span>
    </div>
    <table>
      <tbody>
        <tr class="session_time">
          <th>時間帯</th>
          <td class="txt">{{ startTime }} 〜 {{ endTime }}</td>
        </tr>
        <tr class="session_chair">
          <th>登壇者</th>
          <td class="txt">
            <div class="chair_row">
              <div class="session_chair_detail" v-for="s in speakers">
                <div class="session_chair_imgbox" :style="speakerStyle(s)"></div>
                <span class="name_txt">{{ s.name }}</span>
              </div>
            </div>
          </td>
        </tr>
        <tr class="session_detail">
          <th>概要</th>
          <td class="txt detail">
            <div class="grad-wrap">
              <input :id="triggerId" class="grad-trigger" type="checkbox">
              <label class="grad-btn" :for="triggerId"></label>
              <div class="grad-item">{{ description }}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import _ from 'lodash'

import { toCategory } from '~/logic/category'

export default {
  props: {
    session: {
      type: Object
    }
  },

  data() {
    return {
      tagClass: 'syubetsu_tag'
    }
  },

  computed: {
    sessionId() {
      return `session${this.session.id}`
    },

    triggerId() {
      return `trigger${this.session.id}`
    },

    title() {
      return this.session.title
    },

    description() {
      return this.session.description
    },

    startTime() {
      return this.session.startTime
    },

    endTime() {
      return this.session.endTime
    },

    speakers() {
      return this.session.speakers
    },

    category() {
      return toCategory(this.session.category)
    },

    categoryClass() {
      return this.category.class
    }
  },

  methods: {
    speakerStyle(s) {
      return {
        backgroundImage: _.isNil(s.picture) ? null : `url(authors/${s.picture})`
      }
    }
  }
}
</script>
