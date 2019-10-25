<template>
  <div class="home">
    <button class="btn" v-on:click="getListAction">get list</button>
    <li v-for="item in items" v-bind:key="item.id">
      {{ item.name }} <button v-on:click="getDetailAction(item.id)">get detail</button>
    </li>
    {{ details }}
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    getListAction() {
      this.$store.dispatch('getList/getList')
    },
    getDetailAction(id) {
      this.$store.dispatch('getDetail/getDetail', id)
    }
  },
  computed: {
    items() {
      return this.$store.getters['getList/list']
    },
    details() {
      return this.$store.getters['getDetail/detail']
    }
  },
}
</script>

<style scoped>
.btn {
  margin: 50px 0;
}
</style>
