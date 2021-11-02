import axios from "axios";

const Maintenance_API_URL = 'http://localhost:8080/user/api/maintenace'

class MaintenaceDataService{

    GetMaintenanceById(id)
    {
        return axios.get(`${Maintenance_API_URL}/${id}`)
    }

    GetAllMaintenance()
    {
        return axios.get(`${Maintenance_API_URL}`)
    }

    CreateNewMaintenance(maintenace)
    {
        return axios.post(`${Maintenance_API_URL}`,maintenace)
    }

    UpdateMaintenance(id,maintenace)
    {
        return axios.put(`${Maintenance_API_URL}/${id}`,maintenace)
    }

    DeleteMaintenance(id)
    {
        return axios.delete(`${Maintenance_API_URL}/${id}`)
    }

}

export default new MaintenaceDataService()