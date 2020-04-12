import React,{useState,useEffect} from "react";
import DietItem from '../DietItem/diet';
import { Link } from "react-router-dom";
import "../../addButton.css";
import './diets.css';

const DietsList = (props) => {


    const diets1=props.diets.map((diet,index) =>
    <DietItem diet={diet} key={index}  onDelete={props.onDelete} onAdd={props.onAdd} onDeletePerson={props.onDeletePerson}/>);

    const tableWithDiets = () => {
        return (
            <div className="table-responsive">
                <table className="table tr-history table-striped table1" >
                    <tbody >{diets1}</tbody>
                </table>
            </div>
        )
    };

    const noDiets = () => {
        return(
            <div className={"col-12 mt-4 p-0 text-left mb-5"}>There are no diets</div>
        )
    };

    const showDiets = () => {
        if(props.diets.length){

            return tableWithDiets();
        }
        return noDiets();
    };

    const addDiet = () => {
        return(
            <Link  to={"/diets/new"} className="bt more-bt">
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
        <div className="backD">
            <div className="container mt-lg-5" style={{color: 'white'}}>
                <br/>
                <br/>
                <div>
                    <h4 style={{fontFamily: "High Tower Text"}}>Chose your diet! <br/>
                        If you like you can add your own.</h4>
                    <br/>
                </div>
                {addDiet()}
                <br/> <br/> <br/>
            {showDiets()}

        </div>
        </div>

    )
};
export default DietsList;
