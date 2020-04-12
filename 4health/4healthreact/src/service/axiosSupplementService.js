import axios from '../axios/axios';
import qs from 'qs';

const SupplementService = {

    fetchSupplements(){
        return axios.get("http://localhost:8080/supplements/");
    },
    fetchSupplement(id){
        return axios.get(`http://localhost:8080/supplements/${id}`);
    },

    addSupplement: (supplement) => {
        const formParams = qs.stringify(supplement);
        return axios.post("http://localhost:8080/supplements/",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    updateSupplement : (supplement) => {
        const data = {
            ...supplement,
            name: supplement.name

        };
        const supplementId= supplement.name;
        const formParams = qs.stringify(data);
        return axios.patch(`http://localhost:8080/supplements/${supplementId}`,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    deleteSupplement:(supplementId) => {
        return axios.delete(`http://localhost:8080/supplements/${supplementId}`);
    },
    addToCart:(user,supplement) =>{
        return axios.put(`http://localhost:8080/supplements/${supplement}/${user}`)
    },
    deletePerson:(user,supplement)=>{
        return axios.delete(`http://localhost:8080/supplements/${supplement}/delete/${user}`);
    }

};
export default SupplementService;