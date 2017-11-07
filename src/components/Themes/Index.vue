<template>
  <div class="col-12">
    <router-link :to="{path:'new'}" append>
      <button class="btn btn-success float-right but">Nouvelle Themes</button>
    </router-link>
    <ThemeList :themes="themes" :lang="lang"></ThemeList>
  </div>
</template>

<script>
const ThemeList = () => import('./Theme.List.vue');
export default {
  computed: {
    themes() {
      return this.$store.getters.getAllThemes;
    },
    lang() {
      return this.$store.getters.getLang;
    }
  },
  created() {
    this.$store.dispatch("getAllThemes");
  },
  components: {
    ThemeList
  }

}
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
