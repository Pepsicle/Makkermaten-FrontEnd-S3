import axios from "axios";

const Employee_API_URL = 'http://localhost:8080/api/employees'

class EmployeeDataServices
{
    GetEmployeesById(id)
    {
        return axios.get(`${Employee_API_URL}/${id}`)
    }

    GetAllEmployees()
    {
        return axios.get(`${Employee_API_URL}`)
    }

    CreateEmployee(employee)
    {
        return axios.post(`${Employee_API_URL}`,employee)
    }

    UpdateEmployee(id,employee)
    {
        return axios.put(`${Employee_API_URL}/${id}`,employee)
    }

    DeleteEmployee(id)
    {
        return axios.delete(`${Employee_API_URL}/${id}`)
    }
}

export default new EmployeeDataServices()