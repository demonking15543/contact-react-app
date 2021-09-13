import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        this.props.history.push('/');

        

    }
    render() {
        return (
            <div className="ui main" style={{marginTop:"5rem"}}>
                <h2>Add Contact</h2>
                <form action="#" className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name" 
                        value={this.state.name}
                        onChange={ (e)=> this.setState({name: e.target.value})} />
                    </div>

                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email"
                        value={this.state.email} 
                        onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
                

            </div>
        )
    }
}
