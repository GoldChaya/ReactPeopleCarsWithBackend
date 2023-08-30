import React from 'react';
import axios from 'axios';
import CarRow from '../Components/CarRow';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';

class DeleteCars extends React.Component {
    state = {
        cars: [],
        searchText: ''
    }

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const {data} = await axios.get(`/api/peoplecars/getcars?id=${id}`);
        this.setState({cars:data});
    }

    onDeleteAllClick = async () => {
        const { personId } = this.props.match.params;
        await axios.post('/api/peoplecars/deletecars', { personId });
        this.props.history.push('/');
    }

    render() {
        const searchText = this.state.searchText.toLowerCase();
        const cars = this.state.cars;
        return (
            <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
                <SearchBar
                    searchText= {searchText}
                    placeholder="Search Cars"
                    onTextChange={e => this.setState({ searchText: e.target.value }) }
                    onClearClick={() => this.setState({ searchText: '' })}
                />
                <div className="row mt-5">
                    <div className="col-md-12">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                        {cars
                            .filter(p => `${p.make.toLowerCase()} ${p.model.toLowerCase()}`.includes(searchText))
                            .map(p => <CarRow car={p} key={p.id} />)}
                    </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Are you sure you want to delete all of these cars?</h3>
                    </div>
                    <div className="col-md-6" style={{ marginTop: 20 }}>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <button className='btn btn-primary btn-lg w-100'>No</button>
                        </Link>
                    </div>
                    <div className="col-md-6" style={{ marginTop: 20 }}>
                        <button onClick={this.onDeleteAllClick} className='btn btn-danger btn-lg w-100'>Yes</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteCars;