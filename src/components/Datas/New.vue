<template>
  <div>
    <DataForm :data="data" :schemas="schemas" :isNew="true" @submit="add" @back="back">
    </DataForm>
  </div>
</template>

<script>
const DataForm = () => import("./Data.Form.vue");
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    add: function(schema) {
      console.log(this.data)
      this.data._createdAt = new Date();
      this.data._schema = schema;
      this.$store
        .dispatch("insertData", this.data)
        .then(response => {
          this.$router.go(-1);
        })
        .catch(error => {
          console.log(error);
        });
    },
    back: function() {
      this.$router.go(-1);
    }
  },
  components: {
    DataForm
  },
  created() {
    this.$store.dispatch("getAllSchemas");
  },
  computed: {
    schemas() {
      return this.$store.getters.getAllSchemas;
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
