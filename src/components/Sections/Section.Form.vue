<template>
  <div class="row">
    <form class="container" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col-12">
          Changer de langue:
          <button @click="setLang('fr')" type="button" v-bind:class="isSelected('fr')">Fr</button>
          <button @click="setLang('ar')" type="button" v-bind:class="isSelected('ar')">Ar</button>
          <button @click="setLang('en')" type="button" v-bind:class="isSelected('en')">En</button>
        </div>
        <SubSectionComponent :section="section" :lang="lang" :pages="pages"></SubSectionComponent>
        <div class="col-12">
          <div class="form-group">
            <button class="btn btn-primary" type="submit"> Valider </button>
            <button class="btn btn-secondary" type="button" @click="back"> Retour </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const Datepicker = () => import("vuejs-datepicker");
const SubSectionComponent = () => import("./SubSection.Form.vue");
export default {
  props: {
    section: {
      type: Object,
      required: true
    },
    pages: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      lang: "fr",
      block: null
    };
  },
  methods: {
    submit: function() {
      this.$emit("submit");
    },
    back: function() {
      this.$emit("back");
    },
    isSelected(l) {
      if (this.lang === l) {
        return "btn btn-primary";
      }
      return "btn btn-secondary";
    },
    setLang(l) {
      this.lang = l;
    }
  },
  components: {
    Datepicker,
    SubSectionComponent
  }
};
</script>

<style scoped>
.max {
  width: 100%;
  height: 100%;
  min-width: 0px;
}
</style>
