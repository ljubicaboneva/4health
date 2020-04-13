import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import "../../addEdit.css"
import Footer from "../../Footer/footer";

const FoodAdd = (props) => {
    const[food, setFood] = useState({});
    const history = useHistory();
    const clearState = {
        name: "",
        kcal:0,
        picUrl: ""
    };

    const onFormSubmit = (e) =>{
        e.preventDefault();
        const newFood = {
            "name": e.target.name.value,
            "kcal": e.target.kcal.value,
            "picUrl":e.target.picUrl.value
        };
        props.onAddFood(newFood);
        history.push("/foods");
    };

    const onReset = () =>{
        setFood(clearState)
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setFood({...food, [paramName]: paramValue});
    };

    const onCancel = (e) => {
        e.preventDefault();
        history.push("/foods")
    };

    const foodNameField = () =>{
        return(
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Food name</label>
                <div className="col-sm-6">
                    <input  className="form-control"
                            id="name"
                            type="text"
                            required
                            maxLength={50}
                            name={"name"}
                            value={food.name}
                            defaultValue={food.name}
                            placeholder="Food name"
                            onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const foodKcalField = () =>
    {
        return(
            <div className="form-group row">
                <label htmlFor="kcal" className="col-sm-4 offset-sm-1 text-left">Kcal</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="kcal"
                           type="number"
                           required
                           maxLength={255}
                           name={"kcal"}
                           value={food.kcal}
                           defaultValue={food.kcal}
                           placeholder="kcal"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const foodPicField = () =>{
        return (
            <div className="form-group row">
                <label htmlFor="picUrl" className="col-sm-4 offset-sm-1 text-left">Picture</label>
                <div className="col-sm-6 col-xl-4">
                    <input className="form-control"
                           id="picUrl"
                           type="text"
                           name={"picUrl"}
                           value={food.picUrl}
                           defaultChecked={food.picUrl}
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
                         disabled={!food.name || !food.kcal}
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
                <h4 className="text-upper text-left p-4">Add Food</h4>
                {foodNameField()}
                {foodKcalField()}
                {foodPicField()}

                <div className={"row"}>
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
            <span className={"fixed-bottom"}> <Footer/> </span>
        </div>
    )

};
export default FoodAdd;