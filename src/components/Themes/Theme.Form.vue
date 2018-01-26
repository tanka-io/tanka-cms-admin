<template>
  <div class="row">
    <form class="container" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-4">
              <div class="form-group">
                <label>Title</label>
                <input type="title" class="form-control" v-model="theme.title">
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label>Logo</label>
                <input type="file" class="form-control" @change="onFileChange">
              </div>
            </div>
            <div class="col-4">
              <div class="form-group">
                <label>Active</label>
                <input type="checkbox" class="form-control" v-model="theme.active">
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label>Navbar Color</label>
                <input type="text" class="form-control" v-model="theme.navColor">
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label>Nav Item Color</label>
                <input type="text" class="form-control" v-model="theme.itemColor">
              </div>
            </div>
          </div>
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
import { upload } from "@/api/upload.service.js";
const Datepicker = () => import("vuejs-datepicker");
export default {
  props: {
    theme: {
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
    onFileChange(e) {
      const formData = new FormData();
      let fileList = e.target.files;
      let fieldName = e.target.name;
      if (!fileList.length) return;
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });
      this.save(formData);
    },
    save(formData) {
      upload(formData)
        .then(x => {
          this.theme.logoPath = x.data.data.path;
        })
        .catch(err => {
          console.log(err);
          alert("Une erreur s'est produite");
        });
    }
  },
  components: {
    Datepicker
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
