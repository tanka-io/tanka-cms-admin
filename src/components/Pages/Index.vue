<template>
  <div class="col-12">
    <router-link :to="{path:'new'}" append>
      <button class="btn btn-success float-right but">Nouvelle Pages</button>
    </router-link>
    <PageList :pages="pages" :lang="lang"></PageList>
  </div>
</template>

<script>
const PageList = () => import('./Page.List.vue');
export default {
  computed: {
    pages() {
      return this.$store.getters.getAllPages;
    },
    lang() {
      return this.$store.getters.getLang;
    }
  },
  created() {
    this.$store.dispatch("getAllPages");
  },
  components: {
    PageList
  }

}
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
