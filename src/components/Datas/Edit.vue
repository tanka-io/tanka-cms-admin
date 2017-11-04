<template>
    <div>
        <Dataform v-if="data && Object.keys(data).length>0" :data="data" :schemas="schemas" @submit="submit" @back="back" pwd=false>
        </Dataform>
        <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
    </div>
</template>

<script>
const Dataform = () => import("./Data.Form.vue");
export default {
  created: function() {
    this.$store.dispatch("getAllSchemas");
    this.$store.dispatch("getDataById", this.$route.params.idData);
  },
  computed: {
    data() {
      return this.$store.getters.getSelectedData;
    },
    schemas() {
      return this.$store.getters.getAllSchemas;
    }
  },
  components: {
    Dataform
  },
  methods: {
    submit() {
      console.log(this.data)
      this.$store.dispatch("editData", this.data).then(f => {
        this.$router.go(-1);
      });
    },
    back() {
      this.$router.go(-1);
    },
    remove() {
      this.$store.dispatch("deleteData", this.data._id).then(f => {
        this.$router.go(-1);
      });
    }
  }
};
</script>

<style scoped>
.black {
  color: black;
}

.red {
  color: red;
}
</style>
