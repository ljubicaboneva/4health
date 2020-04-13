import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card'

class Supplement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cart: props.supplement.addedToCart,
            more:'0'
        };
    }

    render() {
        return (<div>
                <Card style={{width: '23rem', height:'26rem'}} className="m-1">
                    <Card.Header><span className="float-right">{this.actions()}</span></Card.Header>
                    <Card.Body>
                        <Card.Title><span>{this.props.supplement.name}</span></Card.Title>
                        <Card.Text style={{color:'white',width:'180',height:'180'}}>
                            {this.details()}
                        </Card.Text>
                        <Card.Footer style={{position:'absolute', bottom:'0',paddingLeft:'50px'}}>
                            <p>Price: {this.props.supplement.price}$</p>
                            <p>Grams: {this.props.supplement.grams}g</p>
                            {this.seeState()}
                            {this.button()}

                        </Card.Footer>
                    </Card.Body>

                </Card>
            </div>
        )
    }

    tryRequire = () => {
        try {
            return require('../../../images/Supplements/' + this.props.supplement.picUrl);
        } catch (err) {
            return null;
        }
    };

    checkImg() {
        const isValid = this.tryRequire();
        if (isValid) {
            return (
                <img width={180} height={180}
                     src={require('../../../images/Supplements/' + this.props.supplement.picUrl)} alt={''}/>
            )
        }
        return (<div style={{width: '200', height: '130'}}>
        </div>)

    }

    actions() {
        return (
            <div>
                {this.edit()}
                {this.remove()}
            </div>

        )
    }

    edit() {
        return (
            <Link className="btn btn-sm btn-outline-light mr-2"
                  to={`/supplements/${this.props.supplement.name}/edit`}>
                <span className="fa fa-edit"/>

            </Link>
        )
    }

    remove() {
        return (
            <button className="btn btn-sm btn-outline-danger "
                    onClick={() => this.props.onDelete(this.props.supplement.name)}>
                <span className="fa fa-remove"/>
            </button>
        )
    }

    more() {
        return (

            <button onClick={()=> this.click()}  className="btn btn-outline-light">
                <span className="fa fa-plus-circle"/>
                <span> More</span>
            </button>


        )
    }

    less(){
        return (
            <button onClick={()=> this.click()}  className="btn btn-outline-light ">
                <span className="fa fa-minus-circle"/>
                <span> Less</span>
            </button>
        )
    }

    click() {
        if (this.state.more === '0') {
            this.setState({more: '1'});

        } else {
            this.setState({more: '0'});
        }
    }

    button(){
        if(this.state.more ==='0'){
            return this.more();
        }
        return this.less()
    }


    details(){
        if(this.state.more === '1') {
            return (
                <div style={{color:'white'}}>
                    <br/> <br/>
               <p>{this.props.supplement.desc}</p>

            </div>
            )
        }
        return(
            <div>  {this.checkImg()} <br/></div>
            )

    }

    changeColor() {
        if (this.state.cart === '0') {
            this.setState({cart: '1'});
        } else {
            this.setState({cart: '0'});
        }

    }

    seeState() {
        if (this.state.cart === '1') {
            return this.deleteFromPerson();
        }
        else if (this.state.cart === '0') {
            return this.cart();
        }
    }

    cart() {
        //let btn_class = this.state.fav ? "btn btn-sm btn-outline-danger" : "btn btn-sm btn-outline-dark";
        return (
            <button className="btn btn-outline-light mr-2"
                    onClick={() => {
                        this.props.onCart("ljubica123", this.props.supplement.name);
                        this.changeColor();
                    }}>
                <span className="fa fa-shopping-cart"/>
                <span> Add to cart</span>
            </button>
        )
    }

    deleteFromPerson() {
        //let btn_class = this.state.fav ? "btn btn-sm btn-outline-danger":"btn btn-sm btn-outline-dark";
        return (
            <button className="btn btn-outline-danger mr-2" disabled
                    onClick={() => {
                        this.props.onDeletePerson("ljubica123", this.props.supplement.name);
                        this.changeColor()
                    }}>
                <span className="fa fa-shopping-cart"/>
                <span> Added to cart</span>
            </button>
        )
    }

}
export default Supplement;