<template>
  <div class="row border">
    <div class="col-12" v-if="block._type==='array' || block._type==='ref'">
      <div class="form-group">
        <label>Name</label>
        <input class="form-control" type="text" v-model="block._title">
      </div>
    </div>
    <div class="col-4">
      <div class="form-group">
        <label>Type</label>
        <select type="text" class="form-control" v-model="block._type" @change="$forceUpdate()">
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
          <option value="array">Array</option>
          <option value="object">Object</option>
          <option value="file">File</option>
          <option value="ref">Reference</option>
        </select>
      </div>
    </div>
    <div class="col-6">
      <div class="form-group" v-if="block._type!=='array' && block._type!=='ref'">
        <label>Name</label>
        <input class="form-control" type="text" v-model="block._title">
      </div>
      <div class="form-group" v-if="block._type==='array'">
        <label>Array Type</label>
        <select type="text" class="form-control" v-model="block._arrType" @change="$forceUpdate()">
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
          <option value="object">Object</option>
          <option value="file">File</option>
          <option value="ref">Reference</option>
        </select>
        <div class="form-group" v-if="block._arrType==='ref'">
          <label>Schemas</label>
          <select type="text" class="form-control" v-model="block._arrRef" @change="$forceUpdate()">
            <option v-for="s in schemas" :key="s._id" :value="s">{{s._title}}</option>
          </select>
        </div>
      </div>
      <div class="form-group" v-if="block._type==='ref'">
        <label>Schemas</label>
        <select type="text" class="form-control" v-model="block._schema" @change="$forceUpdate()">
          <option v-for="s in schemas" :key="s._id" :value="s">{{s._title}}</option>
        </select>
      </div>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-primary margin-top" v-if="block._type==='object'" @click="extend">Etendre</button>
      <button type="button" class="btn btn-danger margin-top" @click="emitRemove">x</button>
    </div>
    <div class="col-12" v-if="block._type==='object'">
      <div class="row">
        <div class="col-11 offset-1" v-for="b in block._children" :key="b._id">
          <DataBlock :block="b" :schemas="schemas" @remove="removeBlock"></DataBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataBlock from "@/models/DataBlock.js";
export default {
  name: "DataBlock",
  props: {
    block: {
      type: Object,
      required: true
    },
    schemas: {
      type: Array,
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
    },
    emitRemove(){
      this.$emit("remove",this.block);
    },
    removeBlock(b){
      this.block._children.forEach((e,i) => {
        if(e===b){
          this.block._children.splice(i,1);
        }
      });
      this.$forceUpdate();
    }
  }
};
</script>

<style scoped>
.margin-top {
  margin-top: 32px;
}
.border {
  margin-top: 4px;
  border: 2px solid lightgray !important;
}
</style>
