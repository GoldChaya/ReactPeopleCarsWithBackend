import React from "react";
import {Route} from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Pages/Home";
import AddPerson from './Pages/AddPerson';
import AddCar from "./Pages/AddCar";
import DeleteCars from "./Pages/DeleteCars"
class App extends React.Component {

    state = {
        count: 0
    }

    onButtonClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/addperson' component={AddPerson} />
                    <Route exact path="/addcar/:personId" component={AddCar} />
                    <Route exact path='/deletecars/:id' component={DeleteCars} />
            </Layout>
        );
    }
};

export default App;