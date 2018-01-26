<template>
  <table class="table table-hover table-striped table-bordered">
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="page in filtered" v-bind:key="page._id">
        <td>{{page[lang].title}}</td>
        <td>{{page.createdAt | formatDate}}</td>
        <td>
          <router-link :to="{ path:page._id+ '/edit'}" append>
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
    pages: {
      type: Array,
      required: true
    },
    lang: {
      type: String,
      required: true
    },
    filter: {
      type: String,
      required: false
    }
  },
  computed: {
    filtered() {
      let filtered = this.pages;
      return filtered
        .filter(e => {
          if (
            e[this.lang].title
              .toLowerCase()
              .indexOf(this.filter.toLowerCase()) === -1
          ) {
            return false;
          }
          return true;
        })
        .filter(e => {
          // return e[this.lang].title !== "_dataList";
          return true
        });
    }
  }
};
</script>

<style>

</style>
