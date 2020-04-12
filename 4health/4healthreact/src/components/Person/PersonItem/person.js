import React,{Component} from 'react';
import {Link} from "react-router-dom";

class Person extends Component{

    render(){
        return(
            <tr>
                <td>
                    {this.props.person.userId}
                </td>
                <td>
                    {this.props.person.password}
                </td>
                <td>
                    {this.props.person.name}
                </td>
                <td>
                    {this.props.person.surname}
                </td>
                {this.checkGender()}
                <td>
                    {this.props.person.age}
                </td>
                {this.checkDiet()}

                {this.actions()}
            </tr>
        )
    }

    checkDiet(){
        if(this.props.person.diet!==null){
            return(
                <td>
                    {this.props.person.diet.name}
                </td>
            )
        }
        return(<td>
        </td>)
    }

    checkGender(){
        if(this.props.person.gender!==''){
            return(
                <td>
                    {this.props.person.gender}
                </td>
            )
        }
        return(<td>
        </td>)
    }

    actions(){
        return(
            <td>
                {this.favourites()}
                {this.edit()}
                {this.remove()}


            </td>
        )
    }

    edit(){
        return(
            <Link className="btn btn-sm btn-secondary mr-2"
                  to={`/people/${this.props.person.userId}/edit`}>
                <span className="fa fa-edit"/>
                <span><strong>Edit</strong></span>
            </Link>
        )
    }

    remove() {
        return (
            <button className="btn btn-sm btn-secondary mr-2"
                    onClick={() => {this.props.onDelete(this.props.person.userId);} }>
                <span className="fa fa-remove"/>
                <span><strong>Remove</strong></span>
            </button>
        )
    }

    favourites(){
        return (

            <Link className="btn btn-sm btn-secondary mr-2"
                  to={`/people/${this.props.person.userId}/favourites`}>
                <span className="fa fa-edit"/>
                <span><strong>Favourites</strong></span>
            </Link>


        )
    }



}
export default Person;