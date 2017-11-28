<template>
  <form @submit.prevent="submit" class="row">
    <div class="col-12">
      <div class="form-group">
        <label>Excel File</label>
        <input type="file" class="form-control" @change="onFileChange">
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <label> Sheet </label>
        <input class="form-control" v-model="chartWizard.sheet">
      </div>
    </div>
    <div class="col-12">
      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { upload } from "@/api/upload.service.js";
export default {
  computed: {
    chartWizard() {
      return this.$store.getters.getChartWizard;
    }
  },
  methods: {
    submit: function() {
      if (
        this.chartWizard.excelPath &&
        this.chartWizard.excelPath.length &&
        this.chartWizard.excelPath.length > 0
      ) {
        this.update().then(d => {
          this.$router.push({ append: false, path: "config" });
        });
      } else {
        alert("Please select of file (Or wait until it's done uploading)");
      }
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
          this.chartWizard.excelPath = x.data.data.path;
        })
        .catch(err => {
          console.log(err);
          alert("Une erreur s'est produite");
        });
    },
    update() {
      return new Promise((resolve, reject) => {
        let props = {
          path: this.chartWizard.excelPath,
          sheet: this.chartWizard.sheet
        };
        axios.post("http://localhost:3000/api/v1/charts", props).then(d => {
          this.chartWizard.datas = d.data.data;
          resolve(this.chartWizard.datas);
        });
      });
    }
  }
};
</script>

<style>

</style>
