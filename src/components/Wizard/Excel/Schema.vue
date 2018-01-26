<template>
    <div>
        <div class="form-group" v-if="!makeNew">
            <label>Schema</label>
            <select class="form-control" v-model="selectedSchema">
                <option v-for="s in schemas" :key="s._id" :value="s">{{s._title}}</option>
            </select>
        </div>
        <div class="form-group" v-if="!makeNew">
            <button class="btn btn-primary" @click="makeNew=true">Select</button>
            <button class="btn btn-info" @click="makeNew=true">New Schema</button>
        </div>
        <div class="col-12" v-if="makeNew">
            <SchemaForm :schema="newSchema" :schemas="schemas" @submit="submit"></SchemaForm>
        </div>
    </div>
</template>

<script>
const SchemaForm = () => import("@/components/Schemas/Schema.Form.vue");
export default {
  created() {
    this.$store.dispatch("getAllSchemas");
  },
  computed: {
    schemas() {
      return this.$store.getters.getAllSchemas;
    },
    chart(){
        return this.$store.getters.getChartWizard;
    }
  },
  data() {
    return {
      selectedSchema: {},
      makeNew: false,
      newSchema: {}
    };
  },
  components: {
    SchemaForm
  },
  methods:{
      submit(e){
      this.newSchema._createdAt = new Date();
      this.$store
        .dispatch("insertSchema", this.newSchema)
        .then(response => {
            console.log(response)
            this.$store.dispatch("setChartWizard",this.chart)
        })
        .catch(error => {
          console.log(error);
        });
      }
  }
};
</script>

<style>

</style>
