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
            <tr v-for="schema in schemas" v-bind:key="schema._id">
                <td>{{schema._title}}</td>
                <td>{{schema._createdAt | formatDate}}</td>
                <td>
                    <router-link :to="{ path:schema._id+ '/edit'}" append>
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
    schemas: {
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
