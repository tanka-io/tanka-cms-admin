<template>
  <div class="row">
    <div class="col-11 offset-1 border">
      <div class="form-group">
        <label>{{schema._title}}</label>
        <input type="file" v-if="schema._type==='file'" class="form-control" @change="onFileChange($event,data,schema)">
        <input class="form-control" type="number" v-if="schema._type==='number'" v-model="data[getTitle(schema)]" required>
        <textarea class="form-control" v-if="schema._type==='text'" v-model="data[getTitle(schema)][lang]" required></textarea>
        <Datepicker v-if="schema._type==='date'" :inline="true" v-model="data[getTitle(schema)]" required></Datepicker>
        <div class="col-11 offset-1" v-if="schema._type==='object'">
          <DataFormBlock v-for="s in schema._children" :key="s._title" :data="data[getTitle(schema)]" :schema="s" :lang="lang"></DataFormBlock>
        </div>
        <div class="col-11 offset-1" v-if="schema._type==='array' && data[getTitle(schema)]">
          <div class="row">
            <div class="col-12" v-for="(e,i) in data[getTitle(schema)]" :key="e._title">
              <div class="row">
                <div class="col-11">
                  <input type="file" v-if="schema._arrType==='file'" class="form-control" @change="onFileChange($event,data,schema,i)">
                  <input class="form-control" type="number" v-if="schema._arrType==='number'" v-model="data[getTitle(schema)][i]" required>
                  <textarea class="form-control" v-if="schema._arrType==='text'" v-model="data[getTitle(schema)][i][lang]" required></textarea>
                  <Datepicker v-if="schema._arrType==='date'" :inline="true" v-model="data[getTitle(schema)][i]" required></Datepicker>
                  <div v-if="schema._arrType==='ref'">
                    <DataFormBlock :data="data[getTitle(schema)][i]" :schema="schema._arrRef" :lang="lang"></DataFormBlock>
                  </div>
                </div>
                <div class="col-1">
                  <button class="btn btn-danger" type="button" @click="removeData(i)">x</button>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-primary" type="button" @click="addElement(schema)">Add Element</button>
        </div>
        <div class="col-11 offset-1" v-if="schema._type==='ref'">
          <!-- <DataFormBlock v-for="s in schema._children" :key="s._title" :data="data[getTitle(schema)]" :schema="s" :lang="lang"></DataFormBlock> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Datepicker = () => import("vuejs-datepicker");
import { upload } from "@/api/upload.service.js";
export default {
  name: "DataFormBlock",
  props: {
    data: {
      type: [Object, Array],
      required: true
    },
    schema: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  methods: {
    getTitle(schema) {
      return schema._title;
    },
    addElement(schema) {
      let arr = this.data[this.getTitle(schema)];
      if (schema._arrType !== "ref") {
        arr.push(this.instantiateType(schema._arrType));
      } else {
        arr.push(this.updateData({}, schema._arrRef));
      }
      this.$forceUpdate();
    },
    initArray() {
      this.schema._children = new Array();
    },
    updateData(data, schema) {
      if (!data[schema._title]) {
        data[schema._title] = this.instantiateType(schema._type);
      }
      if (schema._type === "object") {
        schema._children.forEach(s => {
          data[schema._title] = this.updateData(data[schema._title], s);
        }, this);
      }
      return data;
    },
    instantiateType(type) {
      if (type === "text") {
        return {
          ar: "",
          fr: "",
          en: ""
        };
      } else if (type === "number") {
        return 0;
      } else if (type === "date") {
        return new Date();
      } else if (type === "array") {
        return new Array();
      } else {
        return new Object();
      }
    },
    removeData(i) {
      this.data[this.getTitle(this.schema)].splice(i, 1);
      this.$forceUpdate();
    },
    onFileChange(e, data, schema, i) {
      const formData = new FormData();
      let fileList = e.target.files;
      let fieldName = e.target.name;
      if (!fileList.length) return;
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });
      this.save(formData, data, schema, i);
    },
    save(formData, data, schema, i) {
      upload(formData)
        .then(x => {
          if (i !== undefined) {
            data[this.getTitle(schema)][i] = x.data.data.path;
          } else {
            data[this.getTitle(schema)] = x.data.data.path;
          }
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
.border {
  border: 2px solid gray;
}
</style>
