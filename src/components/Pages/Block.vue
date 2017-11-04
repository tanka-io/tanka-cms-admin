<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-1" v-if="(block.children && block.children.length < 6) || (!block.children)">
              <button class="max" type="button" @click="beforeAdd">+</button>
            </div>
            <div class="col-10">
              <div class="row">
                <div :class="setClass(block.children)" v-for="b in block.children" :key="b._id">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <label>Type</label>
                        <select type="text" class="form-control" v-model="b.type" @change="$forceUpdate()" required>
                          <option value="text">Text</option>
                          <option value="title">Tile</option>
                          <option value="image">Image</option>
                          <option value="chart">Chart</option>
                        </select>
                      </div>
                      <div class="form-group" v-if="b.type === 'text'">
                        <label>Content</label>
                        <textarea class="form-control" v-model="b[lang].value" required></textarea>
                      </div>
                      <div class="form-group" v-if="b.type === 'title' || b.type === 'image' || b.type === 'chart'">
                        <label>Valeur</label>
                        <input type="text" class="form-control" v-model="b[lang].value" required></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1" v-if="(block.children && block.children.length < 6) || (!block.children)">
              <button class="max" type="button" @click="afterAdd">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Block from "@/models/Block.js";
export default {
  name: "BlockComponent",
  props: {
    block: {
      type: Object,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  methods: {
    beforeAdd(block) {
      if (
        (this.block.children && this.block.children.length < 6) ||
        !this.block.children
      ) {
        let b = new Block();
        if (!this.block.children) {
          this.block.children = new Array();
        }
        this.block.children.unshift(b);
        this.$forceUpdate();
      }
    },
    afterAdd() {
      if (
        (this.block.children && this.block.children.length < 6) ||
        !this.block.children
      ) {
        let b = new Block();
        if (!this.block.children) {
          this.block.children = new Array();
        }
        this.block.children.push(b);
        this.$forceUpdate();
      }
    },
    setClass(children) {
      let size = 12;
      while (size * children.length > 12) {
        size--;
      }
      console.log("col-" + size);
      return "col-" + size;
    }
  }
};
</script>

<style scoped>
.max {
  width: 100%;
  height: 100%;
  min-width: 0px;
}
</style>
