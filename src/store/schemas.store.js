import { getAllSchemas, getSchemaById, insertSchema, editSchema, deleteSchema } from '@/api/schemas.service.js';

export default {
    state: {
        schemas: [],
        selectedSchema: {}
    },
    getters: {
        getAllSchemas(state) {
            return state.schemas;
        },
        getSelectedSchema(state) {
            return state.selectedSchema;
        }
    },
    mutations: {
        getAllSchemas(state, schemas) {
            state.schemas = schemas;
        },
        getSchemaById(state, schema) {
            for (let i = 0; i < state.schemas.length; i++) {
                if (state.schemas[i]._id === schema._id) {
                    state.schemas.splice(i, 1);
                    break;
                }
            }
            state.schemas.push(schema);
        },
        setSelectedSchema(state, schema) {
            state.selectedSchema = schema;
        },
        deleteSchema(state, id) {
            for (let i = 0; i < state.schemas.length; i++) {
                if (state.schemas._id === id) {
                    state.schemas.splice(i, 1);
                    break;
                }
            }
        }
    },
    actions: {
        getAllSchemas(context) {
            return new Promise((resolve, reject) => {
                getAllSchemas().then(schemas => {
                    context.commit("getAllSchemas", schemas);
                    resolve(schemas);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        getSchemaById(context, id) {
            return new Promise((resolve, reject) => {
                getSchemaById(id).then(schema => {
                    context.commit("getSchemaById", schema);
                    context.commit("setSelectedSchema", schema);
                    resolve(schema);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        insertSchema(context, schema) {
            return new Promise((resolve, reject) => {
                insertSchema(schema).then(schema => {
                    resolve(schema);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        editSchema(context, schema) {
            return new Promise((resolve, reject) => {
                editSchema(schema).then(schema => {
                    resolve(schema);
                }).catch(err => {
                    reject(err);
                })
            });
        },
        deleteSchema(context, id) {
            return new Promise((resolve, reject) => {
                deleteSchema(id).then(() => {
                    context.commit('deleteSchema', id);
                    resolve();
                }).catch(err => {
                    reject(err);
                })
            });
        }
    }
}