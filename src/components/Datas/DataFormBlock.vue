<template>
  <div class="row">
    <div class="col-11 offset-1 border">
      <div class="form-group">
        <label>{{schema._title}}</label>
        <input class="form-control" type="number" v-if="schema._type==='number'" v-model="data[getTitle(schema)]">
        <textarea class="form-control" v-if="schema._type==='text'" v-model="data[getTitle(schema)][lang]"></textarea>
        <Datepicker v-if="schema._type==='date'" :inline="true" v-model="data[getTitle(schema)]"></Datepicker>
          <!-- {{data}}<br><br>
          {{schema}} -->
        <div class="col-11 offset-1" v-if="schema._type==='object'">
          <DataFormBlock v-for="s in schema._children" :key="s._title" :data="data[getTitle(schema)]" :schema="s" :lang="lang"></DataFormBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Datepicker = () => import("vuejs-datepicker");
export default {
  name: "DataFormBlock",
  props: {
    data: {
      type: Object,
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
  methods:{
    getTitle(schema){
      return schema._title;
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style scoped>
.border {
  border: 2px solid lightgray;
}
</style>
