import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            duration: '',
            description: '',
            date: new Date()
        }
        this.onchangevalue = this.onchangevalue.bind(this)
        this.onsubmitt = this.onsubmitt.bind(this)
    }
    onchangevalue(e) {
        const { name, value } = e.target
        if (name === 'username') {
            this.setState({
                username: value
            })
        } else if (name === 'dura') {
            this.setState({
                duration: value
            })
        } else if (name === 'desc') {
            this.setState({
                description: value
            })
        }

    }
    onsubmitt(e){
        e.preventDefault()
        const createexercise= {
            usernaam:this.state.username,
            desc:this.state.description,
            dura:this.state.duration,
            dat:this.state.date,

        }
        axios.post('http://localhost:5000/exercise/add',createexercise)
        .then(res => console.log(res,"---",res.data))
        .catch(e => console.log(e))

        window.location="/"
    }

    render() {
        console.log(this.state)
        
        return (
            <div>
                <Navbar />
                <form action="/" onSubmit={this.onsubmitt} className='container'>
                    <div className="form-group ">
                        <label for="exampleInputEmail1">username</label>
                        <input onChange={this.onchangevalue} name='username' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">duration</label>
                        <input onChange={this.onchangevalue}  name='dura' type="number" className="form-control" id="exampleInputPassword1"  />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">description</label>
                        <input onChange={this.onchangevalue}  name='desc' type="text" className="form-control" id="exampleInputPassword1"  />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">date</label>
                        <input onChange={this.onchangevalue}  name='dat' type="date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </form>

            </div>
        )
    }
}
