<template>
    <div>
        <Themeform :theme="theme" @submit="submit" @back="back" pwd=false>
        </Themeform>
        <button class="btn btn-danger" type="button" @click="remove"> supprimer </button>
    </div>
</template>

<script>
const Themeform = () => import("./Theme.Form.vue");
export default {
  created: function() {
    this.$store.dispatch("getThemeById", this.$route.params.idTheme);
  },
  computed: {
    theme() {
      return this.$store.getters.getSelectedTheme;
    }
  },
  components: {
    Themeform
  },
  methods: {
    submit() {
      this.$store.dispatch("editTheme", this.theme).then(f => {
        this.$router.go(-1);
      });
    },
    back() {
      this.$router.go(-1);
    },
    remove() {
      this.$store.dispatch("deleteTheme", this.theme._id).then(f => {
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
