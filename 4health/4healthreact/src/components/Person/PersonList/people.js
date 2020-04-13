import React from "react";
import PersonItem from '../PersonItem/person';
import { Link } from "react-router-dom";
import "../../addButton.css";
import './people.css';
import Footer from "../../Footer/footer";

const PersonList = (props) => {

    const people = props.people.map((person,index) =>
        <PersonItem person={person} key={index} onDelete={props.onDelete}/>
    );

    const header = () => {
        return(
            <thead>
            <tr>
                <th scope="col">UserName</th>
                <th scope="col">Password</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Diet</th>
            </tr>
            </thead>
        )
    };

    const tableWithPeople = () => {
        return (
            <div className="table-responsive">
                <table className="table tr-history table-striped" style={{color: 'white'}}>
                    {header()}
                    <tbody>{people}</tbody>
                </table>
                <br/>
            </div>
        )
    };

    const noPeople = () => {
        return(
            <div className={"col-12 mt-4 p-0 text-left mb-5"}>There are no people</div>
        )
    };

    const showPeople = () => {
        if(props.people.length){
            return tableWithPeople();
        }
        return noPeople();
    };

    const addPerson = () => {
        return(
            <Link  to={"/people/new"} className="bt more-bt">
                <span className="fl">
                </span><span className="sfl">
            </span><span className="cross">
            </span><i>
            </i>
                <span className="p">add</span>
            </Link>
        )
    };

    return(
        <div className="backP" style={{fontFamily: "Cambria"}}>
            <div className="container mt-lg-5" style={{color: 'white'}}>
                <br/><br/><br/><br/>
                <div className={"row"}>
            <h4 className="text-upper text-left" >People</h4><br/><br/>
            {showPeople()}
                    <div style={{marginLeft:'970px'}}>{addPerson()}</div>
        </div>
            </div>
            <span className={"fixed-bottom"}> <Footer/> </span>
        </div>
    )

};
export default PersonList;
