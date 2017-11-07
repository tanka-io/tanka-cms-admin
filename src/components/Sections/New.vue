<template>
  <div>
    <SectionForm :section="section" :pages="pages" :schemas="schemas" @submit="add" @back="back">
    </SectionForm>
  </div>
</template>

<script>
const SectionForm = () => import("./Section.Form.vue");
import Section from "@/models/Section.js";
export default {
  data() {
    return {
      section: new Section()
    };
  },
  methods: {
    add: function() {
      this.section.createdAt = new Date();
      this.$store
        .dispatch("insertSection", this.section)
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
    SectionForm
  },
  created() {
    this.$store.dispatch("getAllPages");
    this.$store.dispatch("getAllSchemas");
  },
  computed: {
    pages() {
      return this.$store.getters.getAllPages;
    },
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
