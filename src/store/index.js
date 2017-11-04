import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// Sub Modules
import PageStore from './pages.store.js'
import SectionStore from './sections.store.js'
import SchemaStore from './schemas.store.js'
import DataStore from './datas.store.js'
import UserStore from './user.store.js'
import UtilStore from './utilities.store.js'
import LangStore from './lang.store.js'


export default new Vuex.Store({
    modules: {
        PageStore,
        SectionStore,
        SchemaStore,
        DataStore,
        UserStore,
        UtilStore,
        LangStore
    }
})