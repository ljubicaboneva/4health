import React,{useState,useEffect}  from 'react';
import PersonService from "../../../service/axiosPersonService";
import {useParams} from "react-router";
import './fav.css';
import Footer from "../../Footer/footer";

const Favourites = (props) => {

    const {id} = useParams();
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        PersonService.showFavourites(id).then((data) => {
            const exercises = data.data;
            setExercises(exercises);
        })
    }, []);

    const handleDelete =(id)=> {
        const s = exercises.filter(r => r.name !== id);
        setExercises(s)
    };

    const listExercises = exercises.map((exercise, index) =>

        <div className={"element"} key={index}>
            <h2 className={"itemName"}>{exercise.name} <button className="btn btn-outline-danger" style={{marginLeft:'10px'}} onClick={() => {
                props.onDeletePerson("ljubica123", exercise.name);
                handleDelete(exercise.name)}}>
                <span className="fa fa-heart"/>
            </button></h2>
            <br/>
            {exercise.description}

        </div>
    );

    const tableWithExercises = () => {
        return (
            <div className="table-responsive">
                <table className="table tr-history table-striped table1 " style={{color: 'white'}}>

                    <tbody>
                    <tr>
                        <th>
                            {listExercises}
                        </th>
                    </tr>
                    </tbody>

                </table>
                <br/><br/>
            </div>
        )
    };

    const noExercises = () => {
        return (
            <div className={"col-12 mt-4 p-0 text-left mb-5"}>There are no favourite exercises</div>
        )
    };

    const showExercises = () => {
        if (exercises.length) {
            return tableWithExercises();
        }
        return noExercises();
    };

    return (
        <div className="backFF">
            <div className="container mt-lg-5" style={{color: 'white'}}>
                <br/>
                <br/>
                <div className="row">
                    <h3 style={{fontFamily: "High Tower Text"}}>Favourite exercises</h3>
                    {showExercises()}

                </div>
            </div>
            <span className={"fixed-bottom"}> <Footer/> </span>
        </div>
    )


};
export default Favourites;