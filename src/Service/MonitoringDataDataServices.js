import axios from "axios";

const MonitoringData_API_URL = 'http://localhost:8080/api/monitoringdata'

class motitoringdataDataServices{
    GetAllMonitoringData(board,port)
    {
       return axios.get(`${MonitoringData_API_URL}/${board}/${port}`)
    }

    GetMonotoringDataPerDay(machinename,datetime)
    {
        return axios.get(`${MonitoringData_API_URL}/${machinename}/${datetime}`)
    }
}

export default new motitoringdataDataServices()