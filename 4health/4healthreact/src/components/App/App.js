import React,{Component} from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "../Header/header";
import Home from "../Home/home";
import ExerciseService from "../../service/axiosExerciseService";
import ExercisesList from "../Exercise/ExercisesList/exercises";
import {Redirect} from "react-router";
import ExerciseEdit from "../Exercise/ExerciseEdit/exerciseEdit"
import ExerciseAdd from "../Exercise/ExerciseAdd/exerciseAdd";
import FoodService from "../../service/axiosFoodService";
import FoodList from "../Food/FoodList/foods";
import FoodAdd from "../Food/FoodAdd/foodAdd";
import FoodEdit from "../Food/FoodEdit/foodEdit";
import DietService from "../../service/axiosDietService";
import DietsList from "../Diet/DietList/diets";
import DietAdd from "../Diet/DietAdd/dietAdd";
import DietEdit from "../Diet/DietEdit/dietEdit";
import SupplementService from "../../service/axiosSupplementService";
import SupplementList from "../Supplement/SupplementList/supplements";
import SupplementAdd from "../Supplement/SupplementAdd/supplementAdd";
import SupplementEdit from "../Supplement/SupplementEdit/supplementEdit";
import PersonService from "../../service/axiosPersonService";
import PersonList from "../Person/PersonList/people";
import PersonAdd from "../Person/PersonAdd/personAdd";
import PersonFavourites from "../Person/PersonFavourites/personFavourites"
import PersonEdit from "../Person/PersonEdit/personEdit";
import PersonCart from "../Person/PersonCart/personCart"
import About from "../About/about";


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            exercises: [],
            foods: [],
            diets: [],
            supplements: [],
            people: [],
            data: [12, 5, 6, 6, 9, 10],
        }
    }

    componentDidMount(){
        this.loadData();
    }

    loadData = () => {
        ExerciseService.fetchExercises().then(result =>{
            this.setState(() => {
                return {
                    "exercises": result.data
                }
                })
        });
        FoodService.fetchFoods().then(result =>{
            this.setState(() => {
                return {
                    "foods": result.data
                }
            })
        });
        DietService.fetchDiets().then(result =>{
            this.setState(() => {
                return {
                    "diets": result.data
                }
            })
        });
        SupplementService.fetchSupplements().then(result =>{
            this.setState(() =>{
                return{
                    "supplements":result.data
                }
            })
        });

        PersonService.fetchPeople().then(result =>{
            this.setState(() =>{
                return{
                    "people":result.data
                }
            })
        })
    };

    createExercise = (i) => {
        ExerciseService.addExercise(i).then(result => {
            const newExercise = result.data;
            if (newExercise)
                this.setState((prevState) => {
                    const exercises = [...prevState.exercises, newExercise];
                    return {
                        "exercises": exercises
                    }
                })
        });
    };
    createFood = (i) => {
        FoodService.addFood(i).then(result => {
            const newFood = result.data;
            if (newFood)
                this.setState((prevState) => {
                    const foods = [...prevState.foods, newFood];
                    return {
                        "foods": foods
                    }
                })
        });
    };

    createDiet = (i) => {
        DietService.addDiet(i).then(result => {
            const newDiet = result.data;
            if (newDiet)
                this.setState((prevState) => {
                    const diets = [...prevState.diets, newDiet];
                    return {
                        "diets": diets
                    }
                })
        });
    };

    createSupplement = (i) => {
        SupplementService.addSupplement(i).then(result =>{
            const newSupplement = result.data;
            if(newSupplement)
                this.setState((prevState) => {
                    const supplements = [...prevState.supplements, newSupplement];
                    return{
                        "supplements" : supplements
                    }
                })
        });
    };

    createPerson = (i) => {
        PersonService.addPerson(i).then(result =>{
            const newPerson = result.data;
                this.setState((prevState) => {
                    const people = [...prevState.people, newPerson];
                    return{
                        "people" : people
                    }
                })
        });
    };


    editExercise = (i) => {
        ExerciseService.updateExercise(i).then(result => {
            const newExercise = result.data;
            this.setState((prevState) => {
                const newExercisesRef = prevState.exercises.map((item) => {
                    if (item.name === newExercise.name) {
                        return newExercise;
                    }
                    return item;
                });
                return {
                    "exercises": newExercisesRef
                }
            })
        });
    };

    editFood = (i) => {
        FoodService.updateFood(i).then(result => {
            const newFood = result.data;
            this.setState((prevState) => {
                const newFoodsRef = prevState.foods.map((item) => {
                    if (item.name === newFood.name) {
                        return newFood;
                    }
                    return item;
                });
                return {
                    "foods": newFoodsRef
                }
            })
        });
    };

    editDiet = (i) => {
        DietService.updateDiet(i).then(result => {
            const newDiet = result.data;
            this.setState((prevState) => {
                const newDietsRef = prevState.diets.map((item) => {
                    if (item.name === newDiet.name) {
                        return newDiet;
                    }
                    return item;
                });
                return {
                    "diets": newDietsRef
                }
            })
        });
    };

    editSupplement = (i) => {
        SupplementService.updateSupplement(i).then(result =>{
            const newSupplement = result.data;
            this.setState((prevState) => {
                const newSupplementsRef = prevState.supplements.map((item) =>{
                    if(item.name === newSupplement.name){
                        return newSupplement;
                    }
                    return item;
                });
                return {
                    "supplements": newSupplementsRef
                }
            })
        });
    };

    editPerson = (i) => {
        PersonService.updatePerson(i).then(result => {
            const newPerson = result.data;
            this.setState((prevState) => {
                const newPersonRef = prevState.people.map((item) => {
                    if (item.userId === newPerson.userId) {
                        return newPerson;
                    }
                    return item;
                });
                return {
                    "people" :newPersonRef
                }
            })
        });
    };

    deleteExercise = (i) => {
        ExerciseService.deleteExercise(i).then(() => {
            this.setState((prevState) => {
                const exercises = prevState.exercises.filter((item) => {
                    return item.name !== i;
                });
                return {
                    "exercises": exercises
                }
            })
        });
    };
    deleteFood = (i) => {
        FoodService.deleteFood(i).then(() => {
            this.setState((prevState) => {
                const foods = prevState.foods.filter((item) => {
                    return item.name !== i;
                });
                return {
                    "foods": foods
                }
            })
        });
    };

    deleteDiet = (i) => {
        DietService.deleteDiet(i).then(() => {
            this.setState((prevState) => {
                const diets = prevState.diets.filter((item) => {
                    return item.name !== i;
                });
                return {
                    "diets": diets
                }
            })
        });
    };

    deleteSupplement = (i) => {
        SupplementService.deleteSupplement(i).then(() => {
            this.setState((prevState) => {
                const supplements = prevState.supplements.filter((item) => {
                    return item.name !== i;
                });
                return {
                    "supplements": supplements
                }
            })
        });
    };

    deletePerson = (i) => {
        PersonService.deletePerson(i).then(()=>{
            this.setState((prevState) =>{
                const people = prevState.people.filter((item) =>{
                    return item.userId !== i;
                });
                return{
                    "people":people
                }
            })
        })

    };

    addFav = (user,exercise) => {ExerciseService.addToFav(user,exercise)};
    addToPerson = (user,diet)=>{DietService.addToPerson(user,diet);};
    deleteDietPerson = (user) =>{DietService.deletePerson(user)};
    deleteExercisePerson = (user,e) =>{ExerciseService.deletePerson(user,e)};
    addToCart = (user,supplement) => {SupplementService.addToCart(user,supplement)};
    deleteSupplementPerson = (user,supplement) => {SupplementService.deletePerson(user,supplement)};
    setUser = (user) => {PersonService.setUser(user)};

    render() {
        const routing = (
            <Router>
                <Header/>
                <main role="main">
                    <div className="container">
                        <Switch>
                            <Route path={"/"} exact>
                                <Home people={this.state.people} onUser={this.setUser}/>
                            </Route>
                            <Route path={"/exercises"} exact>
                                <ExercisesList exercises={this.state.exercises} onDelete={this.deleteExercise} onFav={this.addFav} onDeletePerson={this.deleteExercisePerson}/>
                            </Route>
                            <Route path={"/foods"} exact>
                                <FoodList foods={this.state.foods} onDelete={this.deleteFood}/>
                            </Route>
                            <Route path={"/diets"} exact>
                                <DietsList diets={this.state.diets} onDelete={this.deleteDiet} onAdd={this.addToPerson} onDeletePerson={this.deleteDietPerson}/>
                            </Route>
                            <Route path={"/supplements"} exact>
                                <SupplementList supplements={this.state.supplements} onDelete={this.deleteSupplement} onCart={this.addToCart} onDeletePerson={this.deleteSupplementPerson}/>
                            </Route>
                            <Route path={"/people"} exact>
                                <PersonList people={this.state.people} onDelete={this.deletePerson}/>
                            </Route>


                            <Route path={"/exercises/new"} exact>
                                <ExerciseAdd onAddNewExercise={this.createExercise}/>
                            </Route>
                            <Route path={"/foods/new"} exact>
                                <FoodAdd onAddFood={this.createFood}/>
                            </Route>
                            <Route path={"/diets/new"} exact>
                                <DietAdd onAddDiet={this.createDiet}/>
                            </Route>
                            <Route path={"/supplements/new"} exact>
                                <SupplementAdd onAddSupplement={this.createSupplement}/>
                            </Route>
                            <Route path={"/people/new"} exact>
                                <PersonAdd onAddPerson={this.createPerson}/>
                            </Route>

                            <Route path={"/exercises/:exerciseId/edit"} exact>
                                <ExerciseEdit onEditExercise={this.editExercise}/>
                            </Route>
                            <Route path={"/foods/:foodId/edit"} exact>
                                <FoodEdit onEditFood={this.editFood}/>
                            </Route>
                            <Route path={"/diets/:dietId/edit"} exact>
                                <DietEdit onEditDiet={this.editDiet}/>
                            </Route>
                            <Route path={"/supplements/:supplementId/edit"} exact>
                                <SupplementEdit onEditSupplement={this.editSupplement}/>
                            </Route>
                            <Route path={"/people/:personId/edit"} exact>
                                <PersonEdit onEditPerson={this.editPerson}/>
                            </Route>

                            <Route path={"/people/:id/favourites"} exact>
                                <PersonFavourites onDeletePerson={this.deleteExercisePerson}/>
                            </Route>

                            <Route path={"/people/:id/cart"} exact>
                                <PersonCart supplements={this.state.supplements} onDeletePerson={this.deleteSupplementPerson}/>
                            </Route>

                            <Route path={"/about"} exact>
                                <About/>
                            </Route>

                            <Redirect to={"/"}/>
                        </Switch>

                    </div>
                </main>
            </Router>

        );
        return (
            <div className="App">
                {routing}
            </div>
        )
    }
}

export default App;