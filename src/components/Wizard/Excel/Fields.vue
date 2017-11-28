<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <b-table :items="[datas[0]]">  
        </b-table>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-12" v-if="datas && datas.length>0">
          <div class="row">
            <div class="col-3" v-for="(f,i) in fields" :key="i">
              <div class="form-group">
                <label>{{f.label}}</label>
                <input class="form-control" v-model="fields[i].value">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: []
    };
  },
  computed: {
    chartWizard() {
      return this.$store.getters.getChartWizard;
    },
    datas() {
      if (this.chartWizard && this.chartWizard.datas) {
        return this.chartWizard.datas;
      }
      return [];
    }
  },
  mounted() {
    this.fields = Object.keys(this.chartWizard.datas[0]).map(e => {
      return { label: e, value: e };
    });
  }
};
</script>

<style>

</style>
