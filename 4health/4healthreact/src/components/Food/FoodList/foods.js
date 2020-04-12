import React,{useState,useEffect} from "react";
import FoodItem from '../FoodItem/food';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import "../../addButton.css";
import './foods.css';

const FoodList = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        const results = props.foods.filter(food =>
            food.name.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    const foods = searchResults.map((food, index) =>
        <FoodItem food={food} key={index} onDelete={props.onDelete} Delete={setSearchTerm}/>
    );

    const foods1 = props.foods.map((food, index) =>
        <FoodItem food={food} key={index} onDelete={props.onDelete} Delete={setSearchTerm}/>
    );

    const header = () => {
        return (
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Kcal/g</th>
                <th scope="col">Picture</th>
            </tr>
            </thead>
        )
    };

    const tableWithFoods = (items) => {

        return (
            <div className="table-responsive">
                <table className="table tr-history table-striped" style={{color: 'white'}}>
                    {header()}

                    <tbody>{items}</tbody>

                </table>
            </div>
        )
    };

    const noFoods = () => {
        return (
            <div className={"col-12 mt-4 p-0 text-left mb-5"}>There are no foods</div>
        )
    };

    const showFoods = () => {
        if (searchTerm !== '') {
            return tableWithFoods(foods);
        }
        else if (props.foods) {
            return tableWithFoods(foods1);
        }
        return noFoods();
    };

    const addFood = () => {
        return (
            <Link to={"/foods/new"} className="bt more-bt">
                <span className="fl">
                </span><span className="sfl">
            </span><span className="cross">
            </span><i>
            </i>
                <span className="p">add</span>
            </Link>
        )
    };
    const text1 = "Find out calories";
    return (
        <div className="backF" style={{fontFamily: "Cambria"}}>
            <div className="container mt-lg-5" style={{color: 'white'}}>
                <br/><br/>
                <h3 style={{fontFamily: "High Tower Text"}} className="text-upper">Foods</h3><br/>
                <div className={"row"}>
                    <div className={"col-9"}>
                        {showFoods()}
                    </div>
                    <div className={"col-3 textField"}>
                        <br/>
                        <span className={"fa fa-2x fa-search mr-2 mt-2"} style={{color: '#21747b'}}/>
                        <TextField
                            size={'small'}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '5px'
                            }}
                            variant={"filled"}
                            label={text1}
                            placeholder="Search food..."
                            inputProps={{style: {color: 'black'}, searchTerm}}
                            onChange={handleChange}
                        />

                        <br/><br/>
                        <p style={{fontSize: '23px'}}>If you can't find it</p><br/>
                        {addFood()}
                        <br/><br/><br/>
                    </div>

                </div>
            </div>
        </div>

    )
};
export default FoodList;
