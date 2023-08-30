import React from "react";
import axios from 'axios';

class AddPerson extends React.Component{

    state={
        person: {
            firstName:'',
            lastName:'',
            age:''
        }
    } 
    onTextChange = e => {
      const copy={...this.state.person};
      copy[e.target.name] = e.target.value;
      this.setState({person:copy});
      
  }  
  handleNavigation = () => {
    this.props.history.push('/');
  };
  

    onSubmitClick = async () => {
      await axios.post('/api/peoplecars/addperson', this.state.person);
      this.handleNavigation();
    }

    render(){
        return(
            <>
            <div className="container" style={{ marginTop: 60 }}>
            <div style={{ minHeight: 1000, paddingTop: 200 }}>
              <div className="row">
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                  <h2>Add a New Person</h2>
                  <input name="firstName" type="text" className="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.onTextChange}/>
                  <br />
                  <input name="lastName" type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.onTextChange}/>
                  <br />
                  <input name="age" type="text" className="form-control" placeholder="Age" value={this.state.age} onChange={this.onTextChange}/>
                  <br />
                  <button className="btn btn-primary btn-lg btn-block" onClick={this.onSubmitClick}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          
            </>
        );
    }
};
export default AddPerson;