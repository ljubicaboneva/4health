import React,{useState,useEffect}  from 'react';
import ExerciseService from "../../../service/axiosExerciseService";
import {useHistory} from 'react-router-dom';
import {useParams} from "react-router";
import "../../addEdit.css"
import Footer from "../../Footer/footer";

const ExerciseEdit = (props) => {

    const [exercise, setExercise] = useState({});
    const {exerciseId} = useParams();
    const history = useHistory();

    useEffect(() => {
        ExerciseService.fetchExercise(exerciseId).then(result => {
            setExercise(result.data);
        })
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const editExercise =
            {
                "name": exerciseId,
                "description": e.target.description.value,
                "picUrl": e.target.picUrl.value
            };
        props.onEditExercise(editExercise);
        history.push("/exercises");

    };

    const onCancel = (e) => {
        e.preventDefault();
        history.push("/exercises")
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setExercise({...exercise, [paramName]: paramValue});
    };


    const exerciseNameField = () => {
        return (
            <div className="form-group row">
                <label htmlFor="exercise" className="col-sm-4 offset-sm-1 text-left">Exercise name</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="exercise"
                           type="text"
                           required
                           disabled
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

    const exerciseDescField = () => {
        return (
            <div className="form-group row ">
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

    const exercisePicField = () => {
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

    const saveButton = () => {
        return (
            <div className=" offset-sm-4 col-sm-3  text-center">
                <button type="submit"
                        disabled={!exercise.name || !exercise.description}
                        className="btn text-upper" style={{background:'aqua'}}>
                    Save
                </button>
            </div>
        )
    };

    const cancelButton = () => {
        return (
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
            <br/><br/><br/><br/>
            <div className="container mt-lg-5">
                <div className="row">
                    <div className="col-8">
                        <form onSubmit={onFormSubmit} className="edit">
                            <h4 className="text-upper text-left">Edit Exercise</h4>
                            {exerciseNameField()}
                            {exerciseDescField()}
                            {exercisePicField()}
                            <div className={"row"}>
                                <div className={"col-5"}>
                                </div>
                                <div className="col-7">
                                    <div className={"row"}>
                                        {saveButton()}
                                        {cancelButton()}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <span className={"fixed-bottom"}> <Footer/> </span>
        </div>

    )

};
export default ExerciseEdit;