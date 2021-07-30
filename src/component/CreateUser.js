import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
           
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
        }

    }
    onsubmitt(e){
        e.preventDefault()
        const subuser={
            usernaam:this.state.username
        }
        console.log('shayd body me ye jata hai---',subuser)
        this.setState({
            username:''
        })

        axios.post('http://localhost:5000/user/add',subuser)
        .then(res => console.log('aaya==',res , res.data))
        .catch(e => console.log(e))
    }

    render() {
        console.log(this.state)
        
        return (
            <div>
                <Navbar />
                <form onSubmit={this.onsubmitt} className='container'>
                    <div className="form-group ">
                        <label for="exampleInputEmail1">username</label>
                        <input onChange={this.onchangevalue} name='username' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </form>

            </div>
        )
    }
}
