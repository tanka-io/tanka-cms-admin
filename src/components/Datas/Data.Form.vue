<template>
  <div class="row">
    <form class="container" v-on:submit.prevent="submit">
      <div class="row">
        <div class="col-12">
          Changer de langue:
          <button @click="setLang('fr')" type="button" v-bind:class="isSelected('fr')">Fr</button>
          <button @click="setLang('ar')" type="button" v-bind:class="isSelected('ar')">Ar</button>
          <button @click="setLang('en')" type="button" v-bind:class="isSelected('en')">En</button>
        </div>
        <div class="col-12">
          <label>Titre</label>
          <input type='text' class="form-control" v-model="data._label">
        </div>
        <div class="col-12">
          <div class="form-group">
            <label>Schema</label>
            <select class="form-control" v-model="schema" @change="updateData(data,schema)">
              <option v-for="s in schemas" :key="s._id" :value="s">{{s._title}}</option>
            </select>
          </div>
        </div>

        <div class="col-12">
          <DataFormBlock :data="data" :schema="schema" :lang="lang"></DataFormBlock>
        </div>
        <div class="col-12">
          <div class="form-group">
            <button class="btn btn-primary" type="submit"> Valider </button>
            <button class="btn btn-secondary" type="button" @click="back"> Retour </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
const DataFormBlock = () => import("./DataFormBlock.vue");
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    schemas: {
      type: Array,
      required: true
    },
    isNew: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      lang: "fr",
      schema: {}
    };
  },
  methods: {
    submit: function() {
      this.$emit("submit", this.schema);
    },
    back: function() {
      this.$emit("back");
    },
    isSelected(l) {
      if (this.lang === l) {
        return "btn btn-primary";
      }
      return "btn btn-secondary";
    },
    setLang(l) {
      this.lang = l;
    },
    updateData(data, schema) {
      if (!data[schema._title]) {
        data[schema._title] = this.instantiateType(schema._type);
      }
      if (schema._type === "object" ) {
        schema._children.forEach(s => {
          data[schema._title] = this.updateData(data[schema._title], s);
        }, this);
      }
      return data;
    },

    instantiateType(type) {
      if (type === "text") {
        return {
          ar: "",
          fr: "",
          en: ""
        };
      } else if (type === "number") {
        return 0;
      } else if (type === "date") {
        return new Date();
      } else if (type === "array") {
        return new Array();
      } else {
        return new Object();
      }
    }
  },
  components: {
    DataFormBlock
  },
  mounted() {
    if (!this.isNew) {
      this.schema = this.data._schema;
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
