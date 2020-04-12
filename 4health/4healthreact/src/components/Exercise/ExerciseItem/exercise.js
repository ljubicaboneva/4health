import React,{Component}  from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import "./exercise.css";
import Modal from 'react-bootstrap/Modal'

class Exercise extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fav: props.exercise.isFavourite,
            modal: '0',
            show: false
        };
    }

    render() {

        return (

            <Card className="card">
                <Card.Body className="card-body text-center">
                    <Card.Header className="remove">{this.remove()}</Card.Header>
                    <Card.Text className="card-text">
                        <h3> {this.props.exercise.name}</h3>
                        <br/>
                        {this.checkImg()}
                    </Card.Text>
                    <Card.Footer> {this.actions()} </Card.Footer>
                </Card.Body>

            </Card>

        )
    }


    tryRequire = () => {
        try {
            return require('../../../images/Exercises/' + this.props.exercise.picUrl);
        } catch (err) {
            return null;
        }
    };

    checkImg() {
        const isValid = this.tryRequire();
        if (isValid) {
            return (
                <img className="imageE"
                     src={require('../../../images/Exercises/' + this.props.exercise.picUrl)} alt={''}/>
            )
        }
        return(<div style={{width:'260px',height:'200px'}}>

        </div>)

    }

    actions() {
        return (
            <div className="action">

                {this.edit()}
                {this.details()}
                {this.seeState()}

            </div>

        )
    }

    edit() {
        return (
            <Link className="btn btn-outline-light mr-2"
                  to={`/exercises/${this.props.exercise.name}/edit`}>
                <span data-toggle="tooltip" title="Edit" className="fa fa-edit"/>
            </Link>
        )
    }

    details() {

        return (
            <span>
                <button data-toggle="tooltip" title="Remove"
                        className="btn btn-outline-light mr-2"
                        onClick={() => this.setState({show: true})}>
                    <span data-toggle="tooltip" title="Details" className="fa fa-book"/>
                </button>

                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({show: false})}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {this.props.exercise.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p style={{textAlign:'center'}}>
                            {this.props.exercise.description}
                            <br/><br/>
                            {this.checkImg()}
                        </p>
                    </Modal.Body>
                </Modal>
            </span>
        )

    }


    remove() {
        return (
            <button data-toggle="tooltip" title="Remove" className="btn btn-sm btn-outline-danger"
                    onClick={() => this.props.onDelete(this.props.exercise.name)}>
                <span className="fa fa-remove"/>
            </button>
        )
    }

    changeColor() {
        if (this.state.fav === '0') {
            this.setState({fav: '1'});
        } else {
            this.setState({fav: '0'});
        }

    }

    seeState() {
        if (this.state.fav === '1') {
            return this.deleteFromPerson();
        }
        else if (this.state.fav === '0') {
            return this.favourite();
        }
    }

    favourite() {
        //let btn_class = this.state.fav ? "btn btn-sm btn-outline-danger" : "btn btn-sm btn-outline-dark";
        return (
            <button data-toggle="tooltip" title="Favourite" className="btn btn-outline-light"
                    onClick={() => {
                        this.props.onFav("ljubica123", this.props.exercise.name);
                        this.changeColor();
                    }}>
                <span className="fa fa-heart"/>
            </button>
        )
    }

    deleteFromPerson() {
        //let btn_class = this.state.fav ? "btn btn-sm btn-outline-danger":"btn btn-sm btn-outline-dark";
        return (
            <button data-toggle="tooltip" title="Not favourite" className="btn  btn-outline-danger"
                    onClick={() => {
                        this.props.onDeletePerson("ljubica123", this.props.exercise.name);
                        this.changeColor()
                    }}>
                <span className="fa fa-heart"/>
            </button>
        )
    }
}
export default Exercise;