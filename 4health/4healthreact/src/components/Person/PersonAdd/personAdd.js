import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import "../../addEdit.css"
import Footer from "../../Footer/footer";

const PersonAdd = (props) => {
    const[person, setPerson] = useState({});
    const history = useHistory();
    const clearState = {
        userId: "",
        password:"",
        name:"",
        surname: "",
        gender:"",
        age:0
    };

    const onFormSubmit = (e) =>{
        e.preventDefault();
        const newPerson = {
            "userId":e.target.userId.value,
            "name": e.target.name.value,
            "password":e.target.password.value,
            "surname":e.target.surname.value,
            "gender":e.target.gender.value,
            "age":e.target.age.value
        };
        props.onAddPerson(newPerson);
        history.push("/people");
    };

    const onReset = () =>{
        setPerson(clearState)
    };

    const onChangeHandler = (e) => {
        const paramName = e.target.name;
        const paramValue = e.target.value;
        setPerson({...person, [paramName]: paramValue});
    };

    const onCancel = (e) => {
        e.preventDefault();
        history.push("/people")
    };

    const personUserNameField = () =>{
        return(
            <div className="form-group row">
                <label htmlFor="userId" className="col-sm-4 offset-sm-1 text-left">UserName</label>
                <div className="col-sm-6">
                    <input  className="form-control"
                            id="userId"
                            type="text"
                            required
                            maxLength={50}
                            name={"userId"}
                            value={person.userId}
                            defaultValue={person.userId}
                            placeholder="UserId"
                            onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const personPasswordField = () =>{
        return(
            <div className="form-group row">
                <label htmlFor="password" className="col-sm-4 offset-sm-1 text-left">Password</label>
                <div className="col-sm-6">
                    <input  className="form-control"
                            id="password"
                            type="password"
                            required
                            maxLength={50}
                            name={"password"}
                            value={person.password}
                            defaultValue={person.password}
                            placeholder="Password"
                            onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const personNameField = () =>
    {
        return(
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4 offset-sm-1 text-left">Name</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="name"
                           type="text"
                           maxLength={255}
                           name={"name"}
                           value={person.name}
                           defaultValue={person.name}
                           placeholder="Name"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const personSurnameField = () =>
    {
        return(
            <div className="form-group row">
                <label htmlFor="surname" className="col-sm-4 offset-sm-1 text-left">Surname</label>
                <div className="col-sm-6">
                    <input className="form-control"
                           id="surname"
                           type="text"
                           maxLength={255}
                           name={"surname"}
                           value={person.surname}
                           defaultValue={person.surname}
                           placeholder="Surname"
                           onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const personGenderField = () =>{
        return(
            <div className="form-group row">
                <label htmlFor="gender" className="col-sm-4 offset-sm-1 text-left">Gender</label>
                <div className="col-sm-6">
                    <input  className="form-control"
                            id="gender"
                            type="text"
                            maxLength={50}
                            name={"gender"}
                            value={person.gender}
                            defaultValue={person.gender}
                            placeholder="Gender"
                            onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const personAgeField = () =>{
        return(
            <div className="form-group row">
                <label htmlFor="age" className="col-sm-4 offset-sm-1 text-left">Age</label>
                <div className="col-sm-6">
                    <input  className="form-control"
                            id="age"
                            type="number"
                            required
                            maxLength={50}
                            name={"age"}
                            value={person.age}
                            defaultValue={person.age}
                            placeholder="Age"
                            onChange={onChangeHandler}/>
                </div>
            </div>
        )
    };

    const saveButton = () =>{
        return(
            <div className="offset-sm-1 col-sm-3  text-center">
                <button  type="submit"
                         disabled={!person.userId || !person.password || !person.age}
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
            <div className="container mt-lg-5">
        <div className="row">
            <div className="col-8">
            <form className="edit" onSubmit={onFormSubmit}>
                <h4 className="text-upper text-left p-4">Add Person</h4>
                {personUserNameField()}
                {personPasswordField()}
                {personAgeField()}
                {personNameField()}
                {personSurnameField()}
                {personGenderField()}

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
export default PersonAdd;