import axios from 'axios';
import config from './config.json';
import { refresh } from './auth.service.js';
let url = config.host + "/api/v1/schemas";

export function getAllSchemas() {
    return new Promise((resolve, reject) => {
        axios.get(url).then(response => {
            let schemas = response.data.data;
            resolve(schemas);
        }).catch((err) => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getAllSchemas();
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}
export function getSchemaById(id) {
    return new Promise((resolve, reject) => {
        axios.get(url + "/" + id).then(response => {
            let schema = response.data.data;
            resolve(schema);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getSchemaById(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function insertSchema(schema) {
    return new Promise((resolve, reject) => {
        axios.post(url, schema).then(response => {
            let schema = response.data.data;
            resolve(schema);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    insertSchema(schema);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function editSchema(schema) {
    return new Promise((resolve, reject) => {
        let id = schema._id;
        axios.put(url + "/" + id, schema).then(response => {
            let schema = response.data.data;
            resolve(schema);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    editSchema(schema);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function deleteSchema(id) {
    return new Promise((resolve, reject) => {
        axios.delete(url + "/" + id).then(response => {
            resolve();
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    deleteSchema(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}