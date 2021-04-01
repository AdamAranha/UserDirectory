import axios from 'axios'

export default {
    getPeople: function () {
        return axios.get('https://randomuser.me/api/?results=25')
            .then(res => res.data.results)
    }
}