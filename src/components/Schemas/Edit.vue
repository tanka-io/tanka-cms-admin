<template>
    <div>
        <Schemaform :schema="schema" :pages="pages" @submit="submit" @back="back" pwd=false>
        </Schemaform>
        <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
    </div>
</template>

<script>
const Schemaform = () => import("./Schema.Form.vue");
export default {
  created: function() {
    this.$store.dispatch("getAllPages");
    this.$store.dispatch("getSchemaById", this.$route.params.idSchema);
  },
  computed: {
    schema() {
      return this.$store.getters.getSelectedSchema;
    },
    pages() {
      return this.$store.getters.getAllPages;
    }
  },
  components: {
    Schemaform
  },
  methods: {
    submit() {
      this.$store.dispatch("editSchema", this.schema).then(f => {
        this.$router.go(-1);
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
