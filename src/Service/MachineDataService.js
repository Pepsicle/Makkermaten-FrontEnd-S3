import axios from "axios";

const Machine_API_URL = 'http://localhost:8080/api/machine'

class MachineDataServices
{

    GetMAchineById(id)
    {
        return axios.get(`${Machine_API_URL}/${id}`)
    }

    GetAllMachines()
    {
        return axios.get(`${Machine_API_URL}s`)
    }

    GetMachineHistoryFromComponent(name)
    {
        return axios.get(`${Machine_API_URL}s/${name}`)
    }
}

export default new MachineDataServices()