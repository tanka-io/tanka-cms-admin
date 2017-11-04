<template>
  <div class="row">
    <div class="col-4">
      <div class="form-group">
        <label>Type</label>
        <select type="text" class="form-control" v-model="block._type" @change="$forceUpdate()">
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
          <option value="array">Array</option>
          <option value="object">Object</option>
        </select>
      </div>
    </div>
    <div class="col-6">
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" type="text" v-model="block._title">
       </div>
    </div>
    <div class="col-2">
       <button type="button" class="btn btn-primary margin-top" v-if="block._type==='object'" @click="extend">Etendre</button>

    </div>
    <div class="col-12" v-if="block._type==='object'">
      <div class="row">
        <div class="col-11 offset-1" v-for="b in block._children" :key="b._id">
         <DataBlock :block="b"></DataBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataBlock from "@/models/DataBlock.js";
export default {
  name:"DataBlock",
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  methods: {
    extend() {
      if (!this.block._children) {
        this.block._children = new Array();
      }
      let b = new DataBlock();
      this.block._children.push(b);
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
.margin-top{
  margin-top:32px;
}
</style>
