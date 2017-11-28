import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// Sub Modules
import PageStore from './pages.store.js'
import SectionStore from './sections.store.js'
import ThemeStore from './themes.store.js'
import SchemaStore from './schemas.store.js'
import DataStore from './datas.store.js'
import UserStore from './user.store.js'
import UtilStore from './utilities.store.js'
import LangStore from './lang.store.js'
import WizardStore from './wizard.store.js'


export default new Vuex.Store({
    modules: {
        PageStore,
        SectionStore,
        ThemeStore,
        SchemaStore,
        DataStore,
        UserStore,
        UtilStore,
        LangStore,
        WizardStore
    }
})