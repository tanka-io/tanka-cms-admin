<template>
  <div class="row">
    <form class="container" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col-12">
          <DataBlockComponent  :schemas="schemas" :block="schema"></DataBlockComponent>
        </div>
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
const DataBlockComponent = () => import("./DataBlock.vue");
import DataBlock from "@/models/DataBlock.js";
export default {
  props: {
    schema: {
      type: Object,
      required: true
    },
    schemas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      lang: "fr"
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
    DataBlockComponent
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
