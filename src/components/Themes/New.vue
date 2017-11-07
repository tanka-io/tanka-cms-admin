<template>
  <div>
    <ThemeForm :theme="theme" @submit="add" @back="back">
    </ThemeForm>
  </div>
</template>

<script>
const ThemeForm = () => import("./Theme.Form.vue");
export default {
  data() {
    return {
      theme: {}
    };
  },
  methods: {
    add: function() {
      this.theme.createdAt = new Date();
      this.$store
        .dispatch("insertTheme", this.theme)
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
    ThemeForm
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
