import axios from '../axios/axios';
import qs from 'qs';

const FoodService = {

    fetchFoods(){
        return axios.get("http://localhost:8080/foods/");
    },
    fetchFood(id){
        return axios.get(`http://localhost:8080/foods/${id}`);
    },

    addFood: (food) => {
        const formParams = qs.stringify(food);
        return axios.post("http://localhost:8080/foods/",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    updateFood : (food) => {
        const data = {
            ...food,
            name: food.name

        };
        const foodId= food.name;
        const formParams = qs.stringify(data);
        return axios.patch(`http://localhost:8080/foods/${foodId}`,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    deleteFood:(foodId) => {
        return axios.delete(`http://localhost:8080/foods/${foodId}`);
    }

};
export default FoodService;