<template>
  <div class="row">
    <form class="col-12" @submit.prevent="">
    </form>
    <div class="col-12">
      <Pie :datas="filtered" :labels="labels"></Pie>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const Pie = () => import("./Pie.vue");
export default {
  data() {
    return {
      datas: [],
      property: ""
    };
  },
  components: {
    Pie
  },
  computed: {
    filtered() {
      if (this.datas && this.datas.length) {
        return this.datas.map(e => {
          return e[Object.keys(e)[1]];
        });
      }
      return [];
    },
    labels() {
      if (this.datas && this.datas.length) {
        return this.datas.map(e => {
          return e[Object.keys(e)[0]];
        });
      }
      return [];
    }
  },
  created() {
    this.update();
  },
  methods: {
    update() {
      let props = {
        path: "/api/v1/chart/depense2017.xlsx",
        sheet: "Feuil1",
        options: {
          start: 1,
          end: 36
        }
      };
      axios.post("http://localhost:3000/api/v1/charts", props).then(d => {
        this.datas = d.data.data;
        console.log(this.datas);
      });
    }
  }
};
</script>

<style>

</style>
