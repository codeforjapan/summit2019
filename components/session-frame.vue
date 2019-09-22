<template>
  <td :class="tdClass" :colspan="colspan">
    <div v-if="session" @click="toSession">
      <span class="session_time">{{ time }}</span><br>
      {{ title }}
    </div>
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
  },

  methods: {
    toSession() {
      this.$router.push(this.sessionPath)
    }
  }
}
</script>

<style scoped>
td {
  border: 1px solid #eee;
}
td div {
  color: white;
  width: 100% !important;
  padding: 0.5em 0.75em !important;
  margin: 0 !important;

  display: -webkit-box !important;
  overflow: hidden !important;
  -webkit-line-clamp: 7 ;
  -webkit-box-orient: vertical;
}
td.tt_key, td.tt_ws, td.tt_presen, td.tt_panel-dis, td.tt_other {
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,.3));
  color:#fff;
}
td.tt_key {
  background-color: #cc99b5;
}
td.tt_ws {
  background-color: #b39f24;
}
td.tt_presen {
  background-color: #1b7385;
}
td.tt_panel-dis {
  background-color: #d95e2b;
}
td.tt_other {
  background-color: #120f4d;
}
td.tt_key:hover, td.tt_ws:hover, td.tt_presen:hover, td.tt_panel-dis:hover, td.tt_other:hover {
  opacity:0.8;
  cursor:pointer;
}
td .session_time {
  font-size: 11px;
  color: #eee;
  font-weight: 600;
}
</style>
