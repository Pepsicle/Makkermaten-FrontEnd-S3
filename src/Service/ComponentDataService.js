import axios from 'axios';

const Component_API_URL = 'http://localhost:8080/api/components'

class ComponentDataServis {

    GetAllComponents(){
        return axios.get(`${Component_API_URL}`)
    }

    GetComponenntById(id){
        return axios.get(`${Component_API_URL}/${id}`)
    }
}

export default new ComponentDataServis()