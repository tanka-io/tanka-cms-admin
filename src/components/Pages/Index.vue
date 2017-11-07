<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-9">
          <div class='form-group'>
            <label>Filter</label>
            <input type='text' class="form-control" v-model="filter">
          </div>
        </div>
        <div class="col-3">
          <router-link :to="{path:'new'}" append>
            <button class="btn btn-success but">Nouvelle Pages</button>
          </router-link>
        </div>
      </div>
      <div class="col-12">
        <PageList :pages="pages" :filter="filter" :lang="lang"></PageList>
      </div>
    </div>
  </div>
</template>

<script>
const PageList = () => import("./Page.List.vue");
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
  },
  data() {
    return {
      filter: ""
    };
  }
};
</script>

<style scoped>
.but {
  margin-bottom: 50px;
}
</style>
