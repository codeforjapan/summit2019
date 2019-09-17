<template>
  <td :class="tdClass" :colspan="colspan">
    <nuxt-link :to="sessionPath" v-if="session">
      <div>
        <span class="session_time">{{ time }}</span><br>
        {{ title }}
      </div>
    </nuxt-link>
  </td>
</template>

<script>
import { toCategory } from '~/logic/category'

export default {
  props: {
    session: {
      type: Object
    },

    colspan: {
      type: Number,
      default: 1
    }
  },

  computed: {
    sessionPath() {
      return `/sessions/${this.session.id}`
    },

    time() {
      return `${this.session.startTime}-${this.session.endTime}`
    },

    title() {
      return this.session.title
    },

    tdClass() {
      return this.session ? `tt_${toCategory(this.session.category).class}` : ''
    }
  }
}
</script>

<style scoped>
a {
  color:white;
  display:block;
  width:100% !important;
  height:100% !important;
  padding: 0.5em 0.75em !important;
  border: 1px solid #eee;
  margin:0 !important;
}
td.tt_key a {
  background-color: #cc99b5;
}
td.tt_ws a {
  background-color: #b39f24;
}
td.tt_presen a{
  background-color: #1b7385;
}
td.tt_panel-dis a{
  background-color: #d95e2b;
}
td.tt_other a{
  background-color: #120f4d;
}
.session_time {
  font-size: 11px;
  color: #eee;
  font-weight: 600;
}
td.tt_key:hover, td.tt_ws:hover, td.tt_presen:hover, td.tt_panel-dis:hover, td.tt_other:hover{
  opacity:0.8;
  cursor:pointer;
}
</style>
