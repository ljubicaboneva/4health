import React,{Component} from 'react';
import {Link} from "react-router-dom";

class Food extends Component{

    render(){
        return(
            <tr>
                <td>
                    {this.props.food.name}
                </td>
                <td width="300">
                    {this.props.food.kcal}
                </td>
                {this.checkImg()}
                {this.actions()}
            </tr>
        )
    }

    tryRequire = () => {
        try {
            return require('../../../images/Foods/' + this.props.food.picUrl);
        } catch (err) {
            return null;
        }
    };

    checkImg(){
        const isValid = this.tryRequire();
        if (isValid) {
            return(
                <td>
                    <img width={180} height={100} src={require('../../../images/Foods/' + this.props.food.picUrl)} alt={''}/>
                </td>
            )
        }
        return(
            <td>
            </td>
        )

    }
    actions(){
        return(
            <td>
                {this.edit()}
                {this.remove()}

            </td>
        )
    }

    edit(){
        return(
            <Link className="btn btn-sm btn-secondary mr-2"
                  to={`/foods/${this.props.food.name}/edit`}>
                <span className="fa fa-edit"/>
                <span><strong>Edit</strong></span>
            </Link>
        )
    }

    remove() {
        return (
            <button className="btn btn-sm btn-outline-secondary mr-2"
                    onClick={() => {this.props.onDelete(this.props.food.name); this.props.Delete('')}}>
                <span className="fa fa-remove"/>
                <span><strong>Remove</strong></span>
            </button>
        )
    }



}
export default Food;