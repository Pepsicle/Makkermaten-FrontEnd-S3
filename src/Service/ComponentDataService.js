import axios from 'axios';

const Component_API_URL = 'http://localhost:8080/user/api'

class ComponentDataServis {

    GetAllComponents(){
        return axios.get(`${Component_API_URL}/components`)
    }
}

export default new ComponentDataServis()