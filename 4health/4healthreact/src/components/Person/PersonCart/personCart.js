import React,{useState,useEffect}  from 'react';
import PersonService from "../../../service/axiosPersonService";
import {useParams} from "react-router";
import './cart.css';
const Cart = (props) => {

    const {id} = useParams();
    const[supplements,setSupplements]=useState([]);
    let total=0;


    useEffect(() =>{
        PersonService.showCart(id).then((data) =>{
            const supplements = data.data;
            setSupplements(supplements);
        })
    },[]);


    const handleDelete =(id)=> {
        const s = supplements.filter(r => r.name !== id);
        setSupplements(s)
    };


    const price = supplements.map(supplement => supplement.price);

    const money = price.map((p) =>
        total += p
    );

        const listSupplements = supplements.map((supplement, index) => <tr key={index} className={"element1"}>
            <td>{supplement.name}</td>
            <td>{supplement.price}</td>
            <td>
                <button className="btn btn-outline-danger"
                        onClick={() => {
                            props.onDeletePerson("ljubica123", supplement.name);
                            handleDelete(supplement.name)
                        }}>
                    <span> Remove from cart</span>
                    <span className="fa fa-shopping-cart"/>

                </button>
            </td>
        </tr>);

    const header = () => {
        return(
            <thead>
            <tr>
                <th scope="col" style={{fontSize:'15px'}}>Name</th>
                <th scope="col" style={{fontSize:'15px'}}>Price</th>
                <th scope="col"/>
            </tr>
            </thead>
        )
    };

    const tableWithExercises = () => {
        return (
            <div className="table-responsive">
                <table className="table tr-history table-striped table1" style={{color: 'white'}}>
                    {header()}
                    <tbody>{listSupplements}</tbody>
                </table>
            </div>
        )
    };

    const noExercises = () => {
        return(
            <div className={"col-12 mt-4 p-0 text-left mb-5"}>The cart is empty!</div>
        )
    };

    const showExercises = () => {
        if(listSupplements.length){
            return tableWithExercises();
        }
        return noExercises();
    };


    return(
        <div className="backC">
            <br/>
            <div className="container mt-lg-5" style={{color: 'white'}}>
                <br/>
                <br/>
        <div className="row">

            <div>
                <h3 style={{fontFamily: "High Tower Text"}}>Cart supplements</h3>
                <h4 className={"total"}>Total price to pay: {total}$</h4>
            </div>
            {showExercises()}
        </div>
            </div>
        </div>
    )


};
export default Cart;