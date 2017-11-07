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
        <div class="col-12 border" v-if="page">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="page[lang].title" required></input>
          </div>
        </div>
        <div class="col-12">
          <hr>
        </div>
        <div class="col-12">
          <BlockComponent v-for="b in page.children" :key="b._id" :block="b" :lang="lang" @parentAdd="parentAdd" @remove="remove"></BlockComponent>
        </div>
        <div class="col-12">
          <button class="max" type="button" @click="parentAdd">+</button>
        </div>
        <div class="col-12">
          <hr>
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
const BlockComponent = () => import("./Block.vue");
const Datepicker = () => import("vuejs-datepicker");
export default {
  props: {
    page: {
      type: Object,
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
    },
    parentAdd(){
      let b = new Object();
      this.page.children.push(b);
    },
    remove(block){
      this.page.children.forEach((b,i)=> {
        if(b.type === block.type && b[lang].value === block[lang].value){
          this.page.children.splice(i,1);
        }
      }, this);
    }
  },
  components: {
    Datepicker,
    BlockComponent
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
