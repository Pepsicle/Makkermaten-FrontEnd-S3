import axios from 'axios';

const TREEVIEW_API_URL = 'http://localhost:8080/user/api'

class TreeviewDataService {

    GetAllComponents(){
        return axios.get(`${TREEVIEW_API_URL}/treeview`)
    }
}

export default new TreeviewDataService()