import React from "react";
import SupplementItem from '../SupplementItem/supplement';
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup'
import "./supplements.css"
import "../../addButton.css";
import Footer from "../../Footer/footer";

const SupplementList = (props) => {

    const supplements = props.supplements.map((supplement, index) =>
        <SupplementItem supplement={supplement} key={index} onDelete={props.onDelete} onCart={props.onCart}
                        onDeletePerson={props.onDeletePerson}/>
    );

    const tableWithSupplements = () => {
        return (
            <div>
                <div className="container mt-lg-5" style={{color: 'white'}}>
                    <div className={"row"}>
                        <CardGroup>
                            {supplements}
                        </CardGroup>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    };

    const noSupplements = () => {
        return (
            <div className={"col-12 mt-4 p-0 text-left mb-5"} style={{color: 'white'}}>There are no supplements
                <span className={"fixed-bottom"}> <Footer/> </span>
            </div>
        )
    };

    const showSupplements = () => {
        if (props.supplements.length) {
            return tableWithSupplements();
        }
        return noSupplements();
    };

    const addSupplement = () => {
        return (
            <Link to={"/supplements/new"} className="bt more-bt">
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
        <div className="backS">
            <div>
                <br/>
                <br/>
                <div className="container mt-lg-5" style={{color: 'white'}}>
                    <h3 style={{fontFamily: "High Tower Text"}} className="text-upper">Supplements</h3>
                    <br/>
                    {addSupplement()}
                    <br/>
                </div>
                {showSupplements()}

            </div>
        </div>
    )
};
export default SupplementList;
