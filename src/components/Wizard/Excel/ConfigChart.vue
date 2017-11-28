<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <label>start at:</label>
                        <input type="number" class="form-control" v-model="chartWizard.config.headers" @change="update()">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label>end at:</label>
                        <input type="number" class="form-control" v-model="chartWizard.config.ends" @change="update()">
                    </div>
                </div>
                <div class="col-4 offset-4">
                    <div class="form-group">
                        <button class="btn btn-primary" @click="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <b-table hover :items="filtered"></b-table>
        </div>
    </div>
</template>

<script>
export default {
  created() {
    this.update();
  },
  methods: {
    submit() {
      this.chartWizard.datas = this.filtered;
      this.$router.push({ path: "fields", apprend: false });
    },
    update() {
      this.chartWizard.config.fields = new Array();
      if (
        this.chartWizard.datas &&
        this.chartWizard.config.headers &&
        this.chartWizard.datas.length > 0 &&
        this.chartWizard.config.headers.length > 0
      ) {
        Object.keys(
          this.chartWizard.datas[this.chartWizard.config.headers]
        ).forEach((e, i) => {
          let aux = {
            label: e,
            value: e
          };
          this.chartWizard.config.fields.push(aux);
        });
      }
      this.$forceUpdate();
    }
  },
  computed: {
    chartWizard() {
      return this.$store.getters.getChartWizard;
    },
    filtered() {
      if (
        this.chartWizard &&
        this.chartWizard.datas &&
        this.chartWizard.datas.length &&
        this.chartWizard.datas.length > 0
      ) {
        return this.chartWizard.datas.filter((e, i) => {
          return (
            i > this.chartWizard.config.headers &&
            i <= this.chartWizard.config.ends
          );
        });
      }
      return [];
    },
    fields() {
      if (
        this.chartWizard &&
        this.chartWizard.config &&
        this.chartWizard.config.fields
      ) {
        return this.chartWizard.config.fields;
      }
      return [];
    }
  }
};
</script>

<style>

</style>
