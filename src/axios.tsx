import axios from "axios";

const instance = axios.create({
     baseURL : 'http://192.168.1.110/CPESD-MIS2.0/public/api/',

    // all-documents
})

export default instance