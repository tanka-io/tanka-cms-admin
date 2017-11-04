<template>
  <div>
    <SchemaForm :schema="schema" @submit="add" @back="back">
    </SchemaForm>
  </div>
</template>

<script>
const SchemaForm = () => import("./Schema.Form.vue");
import DataBlock from '@/models/DataBlock.js';
export default {
  data() {
    return {
      schema: new DataBlock()
    };
  },
  methods: {
    add: function() {
      this.schema._createdAt = new Date();
      this.$store
        .dispatch("insertSchema", this.schema)
        .then(response => {
          this.$router.go(-1);
        })
        .catch(error => {
          console.log(error);
        });
    },
    back: function() {
      this.$router.go(-1);
    }
  },
  components: {
    SchemaForm
  }
};
</script>

<style scoped>
.black {
  color: black;
}

.red {
  color: red;
}
</style>
