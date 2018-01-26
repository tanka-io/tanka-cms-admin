<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-5">
          <div class='form-group'>
            <label>Filter</label>
            <input type='text' class="form-control" v-model="filter">
          </div>
        </div>
        <div class="col-4">
          <div class='form-group'>
            <label>Type</label>
            <select class="form-control" v-model="schema">
              <option v-for="s in schemas" :key="s._id" :value="s._id">{{s._title}}</option>
            </select>
          </div>
        </div>
        <div class="col-3">
          <router-link :to="{path:'new'}" append>
            <button class="btn btn-success but">Nouvelle Datas</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="col-12">
      <data-list :datas="datas" :lang="lang"></data-list>
    </div>
  </div>
</template>

<script>
const DataList = () => import("./Data.List.vue");
export default {
  computed: {
    datas() {
      let datas = this.$store.getters.getAllDatas;
      if (typeof datas === "object" && datas.length > 0) {
        return datas.filter(e => {
          return (
            (e._schema._id === this.schema || this.schema === "") &&
            (e._label.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1 ||
              this.filter === "")
          );
        });
      }
      return [];
    },
    schemas() {
      return this.$store.getters.getAllSchemas;
    },
    lang() {
      return this.$store.getters.getLang;
    }
  },
  created() {
    this.$store.dispatch("getAllDatas");
    this.$store.dispatch("getAllSchemas");
  },
  components: {
    "data-list": DataList
  },
  data() {
    return {
      schema: "",
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
