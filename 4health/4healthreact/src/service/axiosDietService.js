import axios from '../axios/axios';
import qs from 'qs';

const DietService = {

    fetchDiets(){
        return axios.get("http://localhost:8080/diets/");
    },
    fetchDiet(id){
        return axios.get(`http://localhost:8080/diets/${id}`);
    },

    addDiet: (diet) => {
        const formParams = qs.stringify(diet);
        return axios.post("http://localhost:8080/diets/",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    updateDiet : (diet) => {
        const data = {
            ...diet,
            name: diet.name

        };
        const dietId= diet.name;
        const formParams = qs.stringify(data);
        return axios.patch(`http://localhost:8080/diets/${dietId}`,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    deleteDiet:(dietId) => {
        return axios.delete(`http://localhost:8080/diets/${dietId}`);
    },

    addToPerson:(user,diet) =>{
        return axios.put(`http://localhost:8080/diets/${diet}/${user}`)
    },

    deletePerson:(user)=>{
        return axios.delete(`http://localhost:8080/diets/delete/${user}`);
    }

};
export default DietService;