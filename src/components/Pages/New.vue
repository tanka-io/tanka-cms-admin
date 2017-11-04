<template>
  <div>
    <PageForm :page="page" @submit="add" @back="back">
    </PageForm>
  </div>
</template>

<script>
const PageForm = () => import("./Page.Form.vue");
import Block from "@/models/Block.js";
export default {
  data() {
    return {
      page: {
        ar: {},
        fr: {},
        en: {},
        children: [new Block()]
      }
    };
  },
  methods: {
    add: function() {
      this.page.createdAt = new Date();
      this.$store
        .dispatch("insertPage", this.page)
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
    PageForm
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
