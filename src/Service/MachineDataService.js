import axios from "axios";

const Machine_API_URL = 'http://localhost:8080/api/machines'

class MachineDataServices
{

    GetMAchineById(id)
    {
        return axios.get(`${Machine_API_URL}/${id}`)
    }

    GetAllMachines()
    {
        return axios.get(`${Machine_API_URL}`)
    }
}

export default new MachineDataServices()