import axios from 'axios';

const Component_API_URL = 'http://localhost:8080/api/components'

class ComponentDataServis {

    GetAllComponents(){
        return axios.get(`${Component_API_URL}`)
    }
}

export default new ComponentDataServis()