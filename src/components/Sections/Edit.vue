<template>
    <div>
        <Sectionform :section="section" :pages="pages" :schemas="schemas" @submit="submit" @back="back" pwd=false>
        </Sectionform>
        <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
    </div>
</template>

<script>
const Sectionform = () => import("./Section.Form.vue");
export default {
  created: function() {
    this.$store.dispatch("getAllPages");
    this.$store.dispatch("getAllSchemas");
    this.$store.dispatch("getSectionById", this.$route.params.idSection);
  },
  computed: {
    section() {
      return this.$store.getters.getSelectedSection;
    },
    pages() {
      return this.$store.getters.getAllPages;
    },
    schemas() {
      return this.$store.getters.getAllSchemas;
    }
  },
  components: {
    Sectionform
  },
  methods: {
    submit() {
      this.$store.dispatch("editSection", this.section).then(f => {
        this.$router.go(-1);
      });
    },
    back() {
      this.$router.go(-1);
    },
    remove() {
      this.$store.dispatch("deleteSection", this.section._id).then(f => {
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
