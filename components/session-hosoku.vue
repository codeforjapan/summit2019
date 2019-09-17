<template>
  <td :class="tdClass">
    <div v-if="session"><slot /></div>
  </td>
</template>

<script>
export default {
  props: {
    session: {
      type: Object
    }
  },

  computed: {
    tdClass() {
      const classes = []
      if (this.session) { classes.push('tt_hosoku') }

      return classes
    }
  }
}
</script>

<style scoped>
td {
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,.3));
  color:#fff;
}
td.tt_hosoku div {
  padding: 10px 9px !important;
  font-size: 12px;
  border: 1px solid #eee;
  background-color: #999;
  width:100% !important;
  height:100% !important;
  margin:0 !important;
}
</style>
