<template>
  <div class="col-12">
    <router-link :to="{path:'new'}" append>
      <button class="btn btn-success float-right but">Nouvelle Datas</button>
    </router-link>
    <data-list :datas="datas" :lang="lang"></data-list>
  </div>
</template>

<script>
const DataList = () => import('./Data.List.vue');
export default {
  computed: {
    datas() {
      return this.$store.getters.getAllDatas;
    },
    lang() {
      return this.$store.getters.getLang;
    }
  },
  created() {
    this.$store.dispatch("getAllDatas");
  },
  components: {
    "data-list":DataList
  }

}
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
