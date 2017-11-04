import { getAllDatas, getDataById, insertData, editData, deleteData } from '@/api/datas.service.js';

export default {
    state: {
        datas: [],
        selectedData: {}
    },
    getters: {
        getAllDatas(state) {
            return state.datas;
        },
        getSelectedData(state) {
            return state.selectedData;
        }
    },
    mutations: {
        getAllDatas(state, datas) {
            state.datas = datas;
        },
        getDataById(state, data) {
            for (let i = 0; i < state.datas.length; i++) {
                if (state.datas[i]._id === data._id) {
                    state.datas.splice(i, 1);
                    break;
                }
            }
            state.datas.push(data);
        },
        setSelectedData(state, data) {
            state.selectedData = data;
        },
        deleteData(state, id) {
            for (let i = 0; i < state.datas.length; i++) {
                if (state.datas._id === id) {
                    state.datas.splice(i, 1);
                    break;
                }
            }
        }
    },
    actions: {
        getAllDatas(context) {
            return new Promise((resolve, reject) => {
                getAllDatas().then(datas => {
                    context.commit("getAllDatas", datas);
                    resolve(datas);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        getDataById(context, id) {
            return new Promise((resolve, reject) => {
                getDataById(id).then(data => {
                    context.commit("getDataById", data);
                    context.commit("setSelectedData", data);
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        insertData(context, data) {
            return new Promise((resolve, reject) => {
                insertData(data).then(data => {
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        editData(context, data) {
            return new Promise((resolve, reject) => {
                editData(data).then(data => {
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        deleteData(context, id) {
            return new Promise((resolve, reject) => {
                deleteData(id).then(() => {
                    context.commit('deleteData', id);
                    resolve();
                }).catch(err => {
                    reject(err);
                })
            });
        }
    }
}