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
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="page[lang].title" required></input>
              </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label>Container</label>
                <input type="checkbox" v-model="page.container">
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="button" @click="addData">Add Data Source</button>
            </div>
            <div class="col-12" v-for="(d,i) in page.dataSource" :key="d._id">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label>Type</label>
                    <select type="text" class="form-control" v-model="page.dataSource[i].type" required>
                      <option v-for="s in schemas" :value="s._id" :key="s._id">{{s._title}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>Value</label>
                    <input type="text" class="form-control" v-model="page.dataSource[i].value" required></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <hr>
        </div>
        <div class="col-12">
          <div class="row">
            <div v-if="page.tabs && page.tabs.length>1" v-for="(tab,i) in page.tabs" :key="tab[lang].title" >
              
          <button class="btn btn-primary" type="button"@click="setSelectedTab(i)">{{tab[lang].title}}</button>
           <button class="btn btn-danger" type="button"@click="deleteTab(i)">x</button>
            </div>
        <div class="col-12">
          <button class="btn btn-success" type="button" @click="addTab()">Add Tab</button>
          </div>
          </div>
        </div>
        <div class="col-12" v-if="page.tabs && page.tabs.length>1">
          <div class="form-group">
            <label>Tab Title</label>
            <input type="text" class="form-control" v-model="page.tabs[selectedTab][lang].title" required>
          </div>
        </div>
        <div class="col-12">
          <hr>
        </div>
        <div class="col-12">
          <BlockComponent v-for="b in page.tabs[selectedTab].children" :key="b._id" :block="b" :lang="lang" @parentAdd="parentAdd" @remove="remove"></BlockComponent>
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
import Block from "@/models/Block.js";
export default {
  props: {
    page: {
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
      lang: "fr",
      block: null,
      selectedTab: 0
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
    parentAdd() {
      let b = new Object();
      this.page.tabs[this.selectedTab].children.push(b);
    },
    remove(block) {
      this.page.tabs[this.selectedTab].children.forEach((b, i) => {
        if (b.type === block.type && b[lang].value === block[lang].value) {
          this.page.tabs[this.selectedTab].children.splice(i, 1);
        }
      }, this);
    },
    addData() {
      if (!this.page.dataSource) {
        this.page.dataSource = new Array();
      }
      this.page.dataSource.push({});
      this.$forceUpdate();
    },
    setSelectedTab(i){
      this.selectedTab= i;
    },
    deleteTab(i){
      this.page.tabs.splice(i,1);
    },
    addTab(){
      this.page.tabs.push({
            ar: {title:"Tab"+this.page.tabs.length},
            fr: {title:"Tab"+this.page.tabs.length},
            en: {title:"Tab"+this.page.tabs.length},
            children: [new Block()]
          })
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
