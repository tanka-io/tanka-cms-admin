<template>
  <div class="col-12">
    <router-link :to="{path:'new'}" append>
      <button class="btn btn-success float-right but">Nouvelle Sections</button>
    </router-link>
    <SectionList :sections="sections" :lang="lang"></SectionList>
  </div>
</template>

<script>
const SectionList = () => import('./Section.List.vue');
export default {
  computed: {
    sections() {
      return this.$store.getters.getAllSections;
    },
    lang() {
      return this.$store.getters.getLang;
    }
  },
  created() {
    this.$store.dispatch("getAllSections");
  },
  components: {
    SectionList
  }

}
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
