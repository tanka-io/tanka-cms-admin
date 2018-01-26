<template>
  <div class="col-11 offset-1 border" v-if="section && section[lang]">
    <div class="row">
      <div class="col-9">
        <div class="row">
          <div class="col-6">
            <div class="form-group">
              <label>
                <span>{{index+1 || 1}})</span> Title
              </label>
              <input type="text" class="form-control" v-model="section[lang].title" required></input>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group" v-if="!section.children || (section.children && section.children.length===0) ">
              <label>Type</label>
              <select type="text" class="form-control" v-model="section._type" required>
                <option value="page">Page</option>
                <option value="template">Data Template</option>
              </select>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group" v-if="!section.children || (section.children && section.children.length===0) ">
              <label>Page</label>
              <select type="text" class="form-control" v-model="section[lang].target" required>
                <option v-for="p in pages" :key="p._id" :value="p[lang].title">{{p[lang].title}}</option>
              </select>
            </div>
            <div class="form-group" v-if="section._type === 'template'">
              <label>Default Page</label>
              <select type="text" class="form-control" v-model="section[lang]._default" required>
                <option v-for="p in pages" :key="p._id" :value="p[lang].title">{{p[lang].title}}</option>
              </select>
            </div>
          </div>
          <div class="col-6" v-if="section._type === 'template'">
            <div class="form-group" v-if="!section.children || (section.children && section.children.length===0) ">
              <label>Data</label>
              <select type="text" class="form-control" v-model="section[lang].data" required>
                <option v-for="s in schemas" :key="s._id" :value="s._id">{{s._title}}</option>
              </select>
            </div>
            <div class="form-group" v-if="!section.children || (section.children && section.children.length===0) ">
              <label>Label</label>
              <input type='text' class="form-control" v-model="section._subLabel">
            </div>
          </div>
          <div class="col-6" v-if="section._type === 'template'">
            <div class="form-group" v-if="!section.children || (section.children && section.children.length===0) ">
              <label>Show List</label>
              <input type='checkbox' class="form-control" v-model="section._showAll">
            </div>
          </div>
        </div>
      </div>

      <div class="col-3">
        <button type="button" class="btn btn-primary margin-top" @click="addSubSection">Add Sub Section</button>
      </div>
      <div class="col-12">
        <div v-for="(s,i) in section.children" :key="s._id">
          <hr>
          <SubSection :section="s" :lang="lang" :pages="pages" :schemas="schemas" :index="i"></SubSection>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Section from "@/models/Section.js";
export default {
  name: "SubSection",
  props: {
    section: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    },
    pages: {
      type: Array,
      required: true
    },
    schemas: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: false
    }
  },
  methods: {
    addSubSection() {
      this.section.children.push(new Section());
    }
  }
};
</script>

<style scoped>
.border {
  border: 2px solid lightgray;
}
.margin-top {
  margin-top: 32px;
}
</style>
