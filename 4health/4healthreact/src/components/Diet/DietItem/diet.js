import React,{Component} from 'react';
import {Link} from "react-router-dom";
import './diet.css'

class Diet extends Component{

    constructor(props) {
        super(props);
        this.state = {
            add: props.diet.added,
            desc:'0'
        }
    }

    render(){
        return(
            <tr>{this.elements()}</tr>
        )
    }

    elements(){
        return(

            <td className={"element2"}>
                <h2 className={"itemName2"}>
                    {this.props.diet.name}
                </h2>
                <br/>
                <div className={"itemName2"}>
                    {this.actions()}
                </div>
                <br/>
                {this.details()}
            </td>

       )
    }
    actions(){
        return(
                <div >
                    {this.seeState()}
                    {this.button()}
                    {this.edit()}
                    {this.remove()}
                </div>)
    }


    more() {
        return (

            <button onClick={()=> this.click()}  className="btn mr-2 btn-outline-light">
                <span className="fa fa-info"/>
                <span> More</span>
            </button>


        )
    }

    less(){
        return (
            <button onClick={()=> this.click()}  className="btn mr-2 btn-outline-light ">
                <span className="fa fa-info"/>
                <span> Less</span>
            </button>
        )
    }

    edit(){
        return(
            <Link className="btn btn-outline-light mr-2"
                  to={`/diets/${this.props.diet.name}/edit`}>
                <span className="fa fa-edit"/>
                <span><strong>Edit</strong></span>
            </Link>
        )
    }

    remove() {
        return (
            <button className="btn  btn-outline-light mr-2"
                    onClick={() => this.props.onDelete(this.props.diet.name)}>
                <span className="fa fa-remove"/>
                <span><strong>Remove</strong></span>
            </button>
        )
    }

    click() {
        if (this.state.desc === '0') {
            this.setState({desc: '1'});

        } else {
            this.setState({desc: '0'});
        }
    }

    button(){
        if(this.state.desc ==='0'){
            return this.more();
        }
        return this.less()
    }


    details(){
        if(this.state.desc === '1') {
            return (<div style={{color:'white'}}>
                <p> {this.props.diet.desc}</p>
            </div>)


        }
        else if(this.state.desc === false){
            return(<div>

            </div>)
        }
    }

    changeColor(){
        if(this.state.add === '0'){
            this.setState({add: '1'});
            window.location.reload()
        }else{
            this.setState({add: '0'});
        }
    }

    seeState(){
        if(this.state.add === '1'){
            return this.deleteFromPerson();
        }
        else
            return this.toPerson();
        }


    toPerson() {
      /* let btn_class = this.state.fav ? "btn btn-sm btn-outline-danger":"btn btn-sm btn-outline-dark";*/
      return (
            <button id={this.props.diet.name} className="btn btn-outline-light mr-2"
                    onClick={() => {this.props.onAdd("ljubica123", this.props.diet.name); this.changeColor(); }}>
                <span className="fa fa-bomb"/>
                <span><strong>Want this diet</strong></span>
            </button>
        )
    }

    deleteFromPerson(){
       /* let btn_class = this.state.fav ? "btn btn-sm btn-outline-danger":"btn btn-sm btn-outline-dark";*/
        return (
           <button id={this.props.diet.name} className="btn btn-outline-danger mr-2"
                         onClick={() => {this.props.onDeletePerson("ljubica123", this.props.diet.name); this.changeColor();}}>
               <span className="fa fa-check"/>
               <span><strong>Done!</strong></span>
           </button>
        )
    }
}

export default Diet;