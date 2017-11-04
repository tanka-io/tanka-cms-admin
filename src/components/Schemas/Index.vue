<template>
  <div class="col-12">
    <router-link :to="{path:'new'}" append>
      <button class="btn btn-success float-right but">Nouvelle Schemas</button>
    </router-link>
    <SchemaList :schemas="schemas" :lang="lang"></SchemaList>
  </div>
</template>

<script>
const SchemaList = () => import('./Schema.List.vue');
export default {
  computed: {
    schemas() {
      return this.$store.getters.getAllSchemas;
    },
    lang() {
      return this.$store.getters.getLang;
    }
  },
  created() {
    this.$store.dispatch("getAllSchemas");
  },
  components: {
    SchemaList
  }

}
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
