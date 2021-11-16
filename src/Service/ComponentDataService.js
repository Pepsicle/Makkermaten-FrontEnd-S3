import axios from 'axios';

const Component_API_URL = 'http://localhost:8080/api/'

class ComponentDataServis {
    GetComponenntById(id)
    {
        return axios.get(`${Component_API_URL}/component/${id}`)
    }

    GetAllComponents(){
        return axios.get(`${Component_API_URL}/components`)
    }

    GetComponenntById(id){
        return axios.get(`${Component_API_URL}/components/${id}`)
    }
}

export default new ComponentDataServis()