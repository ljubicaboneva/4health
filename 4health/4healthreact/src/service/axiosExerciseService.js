import axios from '../axios/axios';
import qs from 'qs';

const ExerciseService = {

    fetchExercises(){
        return axios.get("http://localhost:8080/exercises/");
    },
    fetchExercise(id){
        return axios.get(`http://localhost:8080/exercises/${id}`);
    },

    addExercise: (exercise) => {
        const formParams = qs.stringify(exercise);
        return axios.post("http://localhost:8080/exercises/",formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

    updateExercise : (exercise) => {
        const data = {
            ...exercise,
            name: exercise.name

        };
        const exerciseId= exercise.name;
        const formParams = qs.stringify(data);
        return axios.patch(`http://localhost:8080/exercises/${exerciseId}`,formParams, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        });
    },
    deleteExercise:(exerciseId) => {
        return axios.delete(`http://localhost:8080/exercises/${exerciseId}`);
    },
    addToFav:(user,exercise) =>{
        return axios.put(`http://localhost:8080/exercises/${exercise}/${user}`)
    },
    deletePerson:(user,exercise)=>{
        return axios.delete(`http://localhost:8080/exercises/${exercise}/delete/${user}`);
    }

};
export default ExerciseService;