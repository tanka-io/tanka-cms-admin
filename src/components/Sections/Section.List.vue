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
            <tr v-for="section in sections" v-bind:key="section._id">
                <td>{{section[lang].title}}</td>
                <td>{{section.createdAt | formatDate}}</td>
                <td>
                    <router-link :to="{ path:section._id+ '/edit'}" append>
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
    sections: {
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
