import axios from "axios";

const UptimeData_API_URL = 'http://localhost:8080/api/machinestatebar'

class uptimeDataServices{
    GetUptimeMachine(name,starttime)
    {
        var res = axios.get(`${UptimeData_API_URL}/${name}/${starttime}`).then(res =>{return res.data})
        // console.log(res.data)
        return res
    }
}

export default new uptimeDataServices()