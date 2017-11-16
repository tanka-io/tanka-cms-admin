<template>
    <div>
        <Pageform :page="page" :schemas="schemas" @submit="submit" @back="back" pwd=false>
        </Pageform>
        <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
    </div>
</template>

<script>
const Pageform = () => import("./Page.Form.vue");
export default {
  created: function() {
    this.$store.dispatch("getAllSchemas");
    this.$store.dispatch("getPageById", this.$route.params.idPage);
  },
  computed: {
    page() {
      return this.$store.getters.getSelectedPage;
    },
    schemas() {
      return this.$store.getters.getAllSchemas;
    }
  },
  components: {
    Pageform
  },
  methods: {
    submit() {
      this.$store.dispatch("editPage", this.page).then(f => {
        this.$router.go(-1);
      });
    },
    back() {
      this.$router.go(-1);
    },
    remove() {
      this.$store.dispatch("deletePage", this.page._id).then(f => {
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
