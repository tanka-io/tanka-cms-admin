<template>
    <table class="table table-hover table-striped table-bordered">
        <thead>
            <tr>
                <th>Type</th>
                <th>Title</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in datas" v-bind:key="data._id">
                <td>{{data._label}}</td>
                <td>{{data._schema._title}}</td>
                <td>{{data._createdAt | formatDate}}</td>
                <td>
                    <router-link :to="{ path:data._id+ '/edit'}" append>
                        <button class="btn btn-info">Modifier</button>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  methods: {
    getTitle(data) {
      let s = "";
      Object.keys(data).forEach(k => {
        if (k !== "_id" && k !== "createdAt" && k !== "schema") {
          s = k;
        }
      });
      return s;
    }
  }
};
</script>

<style>

</style>
