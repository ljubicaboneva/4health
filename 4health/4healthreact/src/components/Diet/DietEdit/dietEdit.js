import React,{useState,useEffect}  from 'react';
import DietService from "../../../service/axiosDietService";
import {useHistory} from 'react-router-dom';
import {useParams} from "react-router";
import "../../addEdit.css"
import Footer from "../../Footer/footer";

const DietEdit = (props) => {

    const [diet, setDiet] = useState({});
    const history = useHistory();
    const {dietId} = useParams();


    useEffect(() => {
        DietService.fetchDiet(dietId).then(result => {
            setDiet(result.data);
        })
    }, []);

    const onFormSubmit = (e) => {
        e.preventDefault();
        const editDiet =
            {
                "name": dietId,
                "desc": e.target.desc.value
            };
        props.onEditDiet(editDiet);
        history.push("/diets");

    };

    const onCancel = (e) => {
        e.preventDefault();
        history.push("/diets")
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setDiet({...diet, [paramName]: paramValue});
    };


    const dietNameField = () => {
        return (
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Diet name</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="name"
                           type="text"
                           required
                           disabled
                           maxLength={50}
                           name={"name"}
                           value={diet.name}
                           defaultValue={diet.name}
                           placeholder="Diet name"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const dietDescField = () => {
        return (
            <div className="form-group row">
                <label htmlFor="desc" className="col-sm-4 offset-sm-1 text-left">Description</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="desc"
                           type="text"
                           required
                           maxLength={255}
                           name={"desc"}
                           value={diet.desc}
                           defaultValue={diet.desc}
                           placeholder="Description"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const saveButton = () => {
        return (
            <div className="offset-sm-1 col-sm-3  text-center">
                <button type="submit"
                        disabled={!diet.name || !diet.desc}
                        className="btn text-upper" style={{background: 'aqua'}}>
                    Save
                </button>
            </div>
        )
    };


    const cancelButton = () => {
        return (
            <div className="offset-sm-1 col-sm-3  text-center">
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
                    <form onSubmit={onFormSubmit} className="edit">
                        <h4 className="text-upper text-left">Edit Diet</h4>
                        {dietNameField()}
                        {dietDescField()}
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
            <span className={"fixed-bottom"}> <Footer/> </span>
        </div>


    )
};
export default DietEdit;