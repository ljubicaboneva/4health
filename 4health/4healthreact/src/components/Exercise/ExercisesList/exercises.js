import React from "react";
import ExerciseItem from '../ExerciseItem/exercise';
import { Link } from "react-router-dom";
import "./exercises.css"
import CardColumns from 'react-bootstrap/CardColumns'
import "../../addButton.css";
import Footer from "../../Footer/footer";

const ExercisesList = (props) => {

    const exercises = props.exercises.map((exercise, index) =>

        <ExerciseItem exercise={exercise} key={index} onDelete={props.onDelete} onFav={props.onFav}
                      onDeletePerson={props.onDeletePerson}/>
    );


    const tableWithExercises = () => {
        return (
            <div>
            <div className="container mt-lg-5" style={{color: 'white'}}>

                <CardColumns>{exercises}</CardColumns>
            </div>
                <Footer/>
            </div>
        )
    };

    const noExercises = () => {
        return (
            <div className={"col-12 mt-4 p-0 text-left mb-5"} style={{color: 'white'}}>There are no exercises
                <span className={"fixed-bottom"}> <Footer/> </span></div>
        )
    };

    const showExercises = () => {
        if (props.exercises.length) {
            return tableWithExercises();
        }
        return noExercises();
    };

    const addExercise = () => {
        return (
            <Link to={"/exercises/new"} className="bt more-bt">
                <span className="fl">
                </span><span className="sfl">
            </span><span className="cross">
            </span><i>
            </i>
                <span className="p">add</span>
            </Link>

        )
    };

    return (
        <div className="backE">
            <div>
                <br/>
                <br/>
                <div className="container mt-lg-5" style={{color: 'white'}}>
                    <h4 style={{fontFamily: "High Tower Text"}}>Here are some exercises for you! <br/>
                        If you like you can add your own.</h4>
                    <br/>
                </div>

                {addExercise()}
                <br/>
                {showExercises()}

            </div>
        </div>
    )

};
export default ExercisesList;
