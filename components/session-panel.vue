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
              <input :id="triggerId" class="grad-trigger" type="button" @click="onClick">
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
    },

    onClick() {
      this.$router.push(`/sessions/${this.session.id}`)
    }
  }
}
</script>

<style scoped>
/*追記　セッションもっと読むボタン*/
.grad-wrap {
  position: relative;
}

.grad-btn {
  z-index: 2;
  position: absolute;
  right: 0;
  bottom: -0.2em;
  left: 0;
  width: 148px;
  margin: auto;
  padding: .5em 0;
  border-radius: 2px;
  color: #2f94a9;
  font-size: 1.4rem;
  cursor: pointer;
  transition: .2s ease;
  font-weight: 700;
  text-align: center;
}

.grad-btn::before {
  font-family: Material Icons;
  content: "keyboard_arrow_right";
  position:relative;
  top: 0.1em;
  left:-0.2em;
  /* WebKitブラウザサポート */
  -webkit-font-smoothing: antialiased;
  /* Chrome、Safariサポート */
  text-rendering: optimizeLegibility;
  /* Firefoxサポート */
  -moz-osx-font-smoothing: grayscale;
  /* IEサポート */
  font-feature-settings: 'liga';
}

.grad-btn::after {
  content: "Read More"
}

.grad-item {
  position: relative;
  overflow: hidden;
  height: 80px; /*隠した状態の高さ*/
  padding-bottom: 2em;
}

.grad-item::before {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px; /*グラデーションで隠す高さ*/
  background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.9) 50%, #fff 100%);
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.9) 50%, #fff 100%);
  background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.9) 50%, #fff 100%); /* IE11 */
  content: "";
}

.grad-trigger {
  display: none; /*チェックボックスは常に非表示*/
}

.grad-trigger:checked ~ .grad-btn::before {
  font-family: Material Icons;
  content: "keyboard_arrow_up";
  position:relative;
  top: 0.1em;
  left:-0.2em;
  /* WebKitブラウザサポート */
  -webkit-font-smoothing: antialiased;
  /* Chrome、Safariサポート */
  text-rendering: optimizeLegibility;
  /* Firefoxサポート */
  -moz-osx-font-smoothing: grayscale;
  /* IEサポート */
  font-feature-settings: 'liga';
}

.grad-trigger:checked ~ .grad-btn::after {
  content: "Close" /*チェックされていたら、文言を変更する*/
}

.grad-trigger:checked ~ .grad-item {
  height: auto; /*チェックされていたら、高さを戻す*/
}

.grad-trigger:checked ~ .grad-item::before {
  display: none; /*チェックされていたら、grad-itemのbeforeを非表示にする*/
}
</style>
