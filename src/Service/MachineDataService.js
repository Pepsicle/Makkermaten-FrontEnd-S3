import axios from "axios";

const Machine_API_URL = 'http://localhost:8080/user/api/machines'

class MachineDataServices
{
    GetAllMachines()
    {
        return axios.get(`${Machine_API_URL}`)
    }
}

export default new MachineDataServices()