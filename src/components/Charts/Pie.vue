<template>
  <div id="chart"></div>
</template>

<script>
export default {
  mounted() {
    this.render();
  },
  methods: {
    render() {
      if (this.datas && this.datas.length && this.labels && this.labels.length) {
        var d3 = Plotly.d3;
        var WIDTH_IN_PERCENT_OF_PARENT = 100,
          HEIGHT_IN_PERCENT_OF_PARENT = 80;
        d3.select("#ok").remove();
        var gd3 = d3
          .select("#chart")
          .append("div")
          .attr("id", "ok")
          .style({
            width: WIDTH_IN_PERCENT_OF_PARENT + "%",
            "margin-left": (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + "%",

            height: HEIGHT_IN_PERCENT_OF_PARENT + "vh",
            "margin-top": (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + "vh"
          });
        var gd = gd3.node();
        Plotly.plot(
          gd,
          [
            {
              type: "pie",
              values: this.datas,
              labels: this.labels
            }
          ],
          {
            font: {
              size: 16
            }
          }
        );
        window.onresize = function() {
          Plotly.Plots.resize(gd);
        };
      } else {
        setTimeout(
          () => {
            console.log("retrying");
            this.render();
          },
          1000,
          this
        );
      }
    }
  },
  props: {
    datas: {
      type: Array,
      required: true
    },
    labels:{
      type:Array,
      required:true
    }
  },
  watch: {
    datas: function(newVal, oldVal) {
      this.render();
    }
  }
};
</script>

<style>

</style>
