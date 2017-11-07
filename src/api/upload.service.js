import axios from 'axios';
import config from '../config/dev.json';
let path = "/api/v1/upload";
let url = config.host + path;
if (process.env.NODE_ENV === 'production') {
    let host = window.location.protocol + "//" + window.location.host;
    url = host + path;
}

function upload(formData) {
    return axios.post(url, formData)
}

export { upload }
