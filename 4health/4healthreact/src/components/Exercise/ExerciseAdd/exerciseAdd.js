import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import "../../addEdit.css"


const ExerciseAdd = (props) =>{

    const[exercise, setExercise] = useState({});
    const history = useHistory();
    const clearState = {
        name: "",
        description: "",
        picUrl: ""
    };

    const onFormSubmit = (e) =>{
        e.preventDefault();
        const newExercise = {

            "name": e.target.name.value,
            "description": e.target.description.value,
            "picUrl":e.target.picUrl.value
        };
        props.onAddNewExercise(newExercise);
        history.push("/exercises");
    };

    const onReset = () =>{
        setExercise(clearState)
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setExercise({...exercise, [paramName]: paramValue});
    };

    const onCancel = (e) => {
        e.preventDefault();
        history.push("/exercises")
    };

    const exerciseNameField = () =>{
        return(
            <div className="form-group row">
                <label htmlFor="exercise" className="col-sm-4 offset-sm-1 text-left">Exercise name</label>
                <div className="col-sm-6">
                    <input  className="form-control"
                            id="exercise"
                            type="text"
                            required
                            maxLength={50}
                            name={"name"}
                            value={exercise.name}
                            defaultValue={exercise.name}
                            placeholder="Exercise name"
                            onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const exerciseDescField = () =>
    {
        return(
            <div className="form-group row">
                <label htmlFor="description" className="col-sm-4 offset-sm-1 text-left">Description</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="description"
                           type="text"
                           required
                           maxLength={255}
                           name={"description"}
                           value={exercise.description}
                           defaultValue={exercise.description}
                           placeholder="Description"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const exercisePicField = () =>{
        return (
            <div className="form-group row">
                <label htmlFor="picUrl" className="col-sm-4 offset-sm-1 text-left">Picture</label>
                <div className="col-sm-6 col-xl-4">
                    <input className="form-control"
                           id="picUrl"
                           type="text"
                           name={"picUrl"}
                           value={exercise.picUrl}
                           defaultChecked={exercise.picUrl}
                           placeholder="Picture"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const saveButton = () =>{
        return(
            <div className="offset-sm-1 col-sm-3  text-center">
                <button  type="submit"
                         disabled={!exercise.name || !exercise.description}
                         className="btn text-upper" style={{background:"aqua"}}>
                    Save
                </button>
            </div>
        )
    };

    const resetButton = () => {
        return (
            <div className=" col-sm-3  text-center">
                <button type="button" className="btn btn-warning text-upper" onClick={onReset}>
                    Reset
                </button>
            </div>
        )
    };

    const cancelButton = () =>{
        return(
            <div className=" col-sm-3  text-center">
                <button onClick={onCancel}
                        className="btn btn-danger text-upper">
                    Cancel
                </button>
            </div>
        )
    };

    return (
        <div className="backEdit">
            <br/><br/><br/>
            <div className="container mt-lg-5">
        <div className="row">
            <div className="col-8">
            <form className="edit" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left p-4">Add Exercise</h4>
                {exerciseNameField()}
                {exerciseDescField()}
                {exercisePicField()}

                <div className={"row"} >
                    <div className={"col-4"}>
                    </div>
                    <div className="col-8">
                        <div className={"row"}>
                            {saveButton()}
                            {resetButton()}
                            {cancelButton()}
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
            </div>
        </div>
    )

};
export default ExerciseAdd;