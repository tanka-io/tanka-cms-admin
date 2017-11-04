import axios from 'axios';
import config from './config.json';
import { refresh } from './auth.service.js';
let url = config.host + "/api/v1/datas";

export function getAllDatas() {
    return new Promise((resolve, reject) => {
        axios.get(url).then(response => {
            let datas = response.data.data;
            resolve(datas);
        }).catch((err) => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getAllDatas();
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}
export function getDataById(id) {
    return new Promise((resolve, reject) => {
        axios.get(url + "/" + id).then(response => {
            let data = response.data.data;
            resolve(data);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    getDataById(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function insertData(data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then(response => {
            let data = response.data.data;
            resolve(data);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    insertData(data);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function editData(data) {
    return new Promise((resolve, reject) => {
        let id = data._id;
        axios.put(url + "/" + id, data).then(response => {
            let data = response.data.data;
            resolve(data);
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    editData(data);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

export function deleteData(id) {
    return new Promise((resolve, reject) => {
        axios.delete(url + "/" + id).then(response => {
            resolve();
        }).catch(err => {
            if (err.response.status === 401) {
                refresh().then(() => {
                    deleteData(id);
                }).catch(() => {
                    reject(err);
                });
            }
            reject(err);
        });
    });
}