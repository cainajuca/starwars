import axios from "axios"

const PlanetsSwapi = {
    get(id) {
        return axios.get(`http://swapi.dev/api/planets/${id}`)
    }
}

export default PlanetsSwapi;