<template>
  <div>
    <Schemaform :schema="schema" :schemas="schemas" @submit="submit" @back="back" pwd=false>
    </Schemaform>
    <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
  </div>
</template>

<script>
const Schemaform = () => import("./Schema.Form.vue");
export default {
  created: function() {
    this.$store.dispatch("getSchemaById", this.$route.params.idSchema);
    this.$store.dispatch("getAllSchemas");
  },
  computed: {
    schema() {
      return this.$store.getters.getSelectedSchema;
    },
    schemas() {
      return this.$store.getters.getAllSchemas;
    }
  },
  components: {
    Schemaform
  },
  methods: {
    submit() {
      this.$store
        .dispatch("editSchema", this.schema)
        .then(f => {
          this.$router.go(-1);
        })
        .catch(err => {
          console.log(err);
        });
    },
    back() {
      this.$router.go(-1);
    },
    remove() {
      this.$store.dispatch("deleteSchema", this.schema._id).then(f => {
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
