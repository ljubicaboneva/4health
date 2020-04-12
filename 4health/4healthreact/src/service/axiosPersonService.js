import axios from '../axios/axios';
import qs from 'qs';

const PersonService = {

    fetchPeople(){
        return axios.get("http://localhost:8080/people/");
    },
    fetchPerson(id){
        return axios.get(`http://localhost:8080/people/${id}`);
    },

    addPerson: (person) => {
        const formParams = qs.stringify(person);
        return axios.post(`http://localhost:8080/people`,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },
    updatePerson : (person) => {
        const data = {
            ...person,
            userId: person.userId
        };
        const personId= person.userId;
        const formParams = qs.stringify(data);
        return axios.patch(`http://localhost:8080/people/${personId}`,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    deletePerson:(personId) => {
        return axios.delete(`http://localhost:8080/people/${personId}`);
    },
    showFavourites:(id) => {
        return axios.get(`http://localhost:8080/people/${id}/favourites`)
    },
    showCart:(id) => {
        return axios.get(`http://localhost:8080/people/${id}/cart`)
    },
    setUser:(id) =>{
        return axios.post(`http://localhost:8080/${id}`)
        }
};
export default PersonService;