<template>
    <table class="table table-hover table-striped table-bordered">
        <thead>
            <tr>
                <th>Title</th>
                <th>Active</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="theme in themes" v-bind:key="theme._id">
                <td>{{theme.title}}</td>
                <td><i class="fa fa-check" v-if="theme.active"></i></td>
                <td>{{theme.createdAt | formatDate}}</td>
                <td>
                    <router-link :to="{ path:theme._id+ '/edit'}" append>
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
    themes: {
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
