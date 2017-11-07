import { getAllThemes, getThemeById, insertTheme, editTheme, deleteTheme } from '@/api/themes.service.js';

export default {
    state: {
        themes: [],
        selectedTheme: {}
    },
    getters: {
        getAllThemes(state) {
            return state.themes;
        },
        getSelectedTheme(state) {
            return state.selectedTheme;
        }
    },
    mutations: {
        getAllThemes(state, themes) {
            state.themes = themes;
        },
        getThemeById(state, theme) {
            for (let i = 0; i < state.themes.length; i++) {
                if (state.themes[i]._id === theme._id) {
                    state.themes.splice(i, 1);
                    break;
                }
            }
            state.themes.push(theme);
        },
        setSelectedTheme(state, theme) {
            state.selectedTheme = theme;
        },
        deleteTheme(state, id) {
            for (let i = 0; i < state.themes.length; i++) {
                if (state.themes._id === id) {
                    state.themes.splice(i, 1);
                    break;
                }
            }
        }
    },
    actions: {
        getAllThemes(context) {
            return new Promise((resolve, reject) => {
                getAllThemes().then(themes => {
                    context.commit("getAllThemes", themes);
                    resolve(themes);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        getThemeById(context, id) {
            return new Promise((resolve, reject) => {
                getThemeById(id).then(theme => {
                    context.commit("getThemeById", theme);
                    context.commit("setSelectedTheme", theme);
                    resolve(theme);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        insertTheme(context, theme) {
            return new Promise((resolve, reject) => {
                insertTheme(theme).then(theme => {
                    resolve(theme);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        editTheme(context, theme) {
            return new Promise((resolve, reject) => {
                editTheme(theme).then(theme => {
                    resolve(theme);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        deleteTheme(context, id) {
            return new Promise((resolve, reject) => {
                deleteTheme(id).then(() => {
                    context.commit('deleteTheme', id);
                    resolve();
                }).catch(err => {
                    reject(err);
                })
            });
        }
    }
}