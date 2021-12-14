import axios from "axios";

const UptimeData_API_URL = 'http://localhost:8080/api/machinestate'

class uptimeDataServices{
    GetUptimeMachine(name,starttime)
    {
       return axios.get(`${UptimeData_API_URL}/${name}/${starttime}`)
    }
}

export default new uptimeDataServices()