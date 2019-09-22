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
  border: 1px solid #eee;
}

td div {
  padding: 10px 9px !important;
  font-size: 12px;
  width:100% !important;
  margin:0 !important;
}

td.tt_hosoku {
  background-color: #999;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,.3));
  color:#fff;
}
</style>
