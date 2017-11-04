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
            <tr v-for="page in pages" v-bind:key="page._id">
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
    }
  }
};
</script>

<style>

</style>
