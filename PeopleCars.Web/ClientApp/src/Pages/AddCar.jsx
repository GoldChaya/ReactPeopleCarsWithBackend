import React from "react";
import axios from 'axios';

class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: ''
            
        },
        person: {
            firstName: '',
            lastName: ''
        }
    }


    componentDidMount = async () => {
        const { personId } = this.props.match.params;
        const { data } = await axios.get(`/api/peoplecars/getperson?id=${personId}`);
        this.setState({ person: data });
    }

    onTextChange = e => {
        const copy = { ...this.state.car };
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
    }

    onSubmitClick = async () => {
        const { personId } = this.props.match.params;
        const { make, model, year } = this.state.car;
        await axios.post('/api/peoplecars/addcar', { make, model, year, personId });
        this.props.history.push('/');
    }

    render() {
        const { make, model, year } = this.state.car;
        const { firstName, lastName } = this.state.person;

        return (
            <div style={{ minHeight: 1000, paddingTop: 200 }}>
                <div className="row">
                    <div className='col-md-6 offset-md-3 card bg-light p-4'>
                        {firstName && <h2>Add a car for {firstName} {lastName}</h2>}
                        <input type="text" className='form-control' name='make' value={make} onChange={this.onTextChange} placeholder="Make" />
                        <br />
                        <input type="text" className='form-control' name='model' value={model} onChange={this.onTextChange} placeholder="Model" />
                        <br />
                        <input type="text" className='form-control' name='year' value={year} onChange={this.onTextChange} placeholder="Year" />
                        <br />
                        <button className='btn btn-primary btn-lg btn-block' onClick={this.onSubmitClick}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }

};
export default AddCar;