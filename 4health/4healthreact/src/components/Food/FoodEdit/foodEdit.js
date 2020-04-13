import React,{useState,useEffect}  from 'react';
import {useHistory} from 'react-router-dom';
import {useParams} from "react-router";
import FoodService from "../../../service/axiosFoodService";
import "../../addEdit.css"
import Footer from "../../Footer/footer";

const FoodEdit = (props) => {
    const[food, setFood] = useState({});
    const history = useHistory();
    const {foodId} = useParams();


    useEffect(() => {
        FoodService.fetchFood(foodId).then(result => {
            setFood(result.data);
        })
    },[]);


    const onFormSubmit = (e) =>{
        e.preventDefault();
        const editFood = {
            "name": e.target.name.value,
            "kcal": e.target.kcal.value,
            "picUrl":e.target.picUrl.value
        };
        props.onEditFood(editFood);
        history.push("/foods");
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
                <label htmlFor="food" className="col-sm-4 offset-sm-1 text-left">Food name</label>
                <div className="col-sm-6">
                    <input  className="form-control"
                            id="food"
                            type="text"
                            required
                            disabled
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
                           placeholder="Kcal"
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
            <div className="offset-sm-4 col-sm-3  text-center">
                <button  type="submit"
                         disabled={!food.name || !food.kcal}
                         className="btn text-upper" style={{background:'aqua'}}>
                    Save
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
            <br/><br/><br/><br/>
            <div className="container mt-lg-5">
            <div className="row">
                <div className="col-8">
                <form onSubmit={onFormSubmit} className="edit">
                    <h4 className="text-upper text-left">Edit Food</h4>
                    {foodNameField()}
                    {foodKcalField()}
                    {foodPicField()}
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
export default FoodEdit;