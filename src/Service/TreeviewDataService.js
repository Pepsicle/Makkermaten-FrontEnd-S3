import axios from 'axios';

const TREEVIEW_API_URL = 'http://localhost:8080/api/treeview'

class TreeviewDataService {

    GetAllComponents(){
        return axios.get(`${TREEVIEW_API_URL}`)
    }
}

export default new TreeviewDataService()