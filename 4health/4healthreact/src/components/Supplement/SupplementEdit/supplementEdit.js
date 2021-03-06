import React, {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import {useParams} from "react-router";
import SupplementService from "../../../service/axiosSupplementService";
import "../../addEdit.css";
import Footer from "../../Footer/footer";

const SupplementEdit = (props) => {
    const [supplement, setSupplement] = useState({});
    const history = useHistory();
    const {supplementId} = useParams();

    useEffect(() => {
        SupplementService.fetchSupplement(supplementId).then(result => {
            setSupplement(result.data);
        })
    }, []);


    const onFormSubmit = (e) => {
        e.preventDefault();
        const editSupplement = {
            "name": e.target.name.value,
            "desc": e.target.desc.value,
            "picUrl": e.target.picUrl.value,
            "price": e.target.price.value,
            "grams": e.target.grams.value
        };
        props.onEditSupplement(editSupplement);
        history.push("/supplements");
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setSupplement({...supplement, [paramName]: paramValue});
    };

    const onCancel = (e) => {
        e.preventDefault();
        history.push("/supplements")
    };

    const supplementNameField = () => {
        return (
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Supplement name</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="name"
                           type="text"
                           required
                           disabled
                           maxLength={50}
                           name={"name"}
                           value={supplement.name}
                           defaultValue={supplement.name}
                           placeholder="Supplement name"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const supplementDescField = () => {
        return (
            <div className="form-group row">
                <label htmlFor="desc" className="col-sm-4 offset-sm-1 text-left">Description</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="desc"
                           type="text"
                           required
                           maxLength={50}
                           name={"desc"}
                           value={supplement.desc}
                           defaultValue={supplement.desc}
                           placeholder="Description"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };


    const supplementPriceField = () => {
        return (
            <div className="form-group row">
                <label htmlFor="price" className="col-sm-4 offset-sm-1 text-left">Price</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="price"
                           type="number"
                           required
                           maxLength={255}
                           name={"price"}
                           value={supplement.price}
                           defaultValue={supplement.price}
                           placeholder="Price"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const supplementGramsField = () => {
        return (
            <div className="form-group row">
                <label htmlFor="grams" className="col-sm-4 offset-sm-1 text-left">Grams</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="grams"
                           type="number"
                           required
                           maxLength={255}
                           name={"grams"}
                           value={supplement.grams}
                           defaultValue={supplement.grams}
                           placeholder="Grams"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const supplementPicField = () => {
        return (
            <div className="form-group row">
                <label htmlFor="picUrl" className="col-sm-4 offset-sm-1 text-left">Picture</label>
                <div className="col-sm-6 col-xl-4">
                    <input className="form-control"
                           id="picUrl"
                           type="text"
                           name={"picUrl"}
                           value={supplement.picUrl}
                           defaultChecked={supplement.picUrl}
                           placeholder="Picture"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };


    const saveButton = () => {
        return (
            <div className="offset-sm-4 col-sm-3  text-center">
                <button type="submit"
                        disabled={!supplement.name || !supplement.price || !supplement.grams}
                        className="btn text-upper"  style={{background:'aqua'}}>
                    Save
                </button>
            </div>
        )
    };

    const cancelButton = () => {
        return (
            <div className="col-sm-3  text-center">
                <button onClick={onCancel}
                        className="btn btn-danger text-upper">
                    Cancel
                </button>
            </div>
        )
    };

    return (
        <div className="backEdit">
            <br/><br/>
            <div className="container mt-lg-5">
                <div className="row">
                    <div className="col-8">
                        <form className="edit" onSubmit={onFormSubmit}>
                            <h4 className="text-upper text-left p-4">Edit Supplement</h4>
                            {supplementNameField()}
                            {supplementDescField()}
                            {supplementPriceField()}
                            {supplementGramsField()}
                            {supplementPicField()}
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
export default SupplementEdit;