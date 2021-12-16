import axios from 'axios';

const Component_API_URL = 'http://localhost:8080/api'

class ComponentDataServis {
    GetComponentById(id)
    {
        return axios.get(`${Component_API_URL}/component/${id}`)
    }

    GetAllComponents(){
        return axios.get(`${Component_API_URL}/components`)
    }

    GetComponentsById(name){
        return axios.get(`${Component_API_URL}/components/${name}`)
    }
    
    GetCurrentComponents(name, timestamp){
        return axios.get(`${Component_API_URL}/components/${name}/${timestamp}`)
    }

    GetTotalshotCountFromComponent(name)
    {
        return axios.get(`${Component_API_URL}/componentshots/${name}`)
    }
}

export default new ComponentDataServis()