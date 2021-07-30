import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useParams } from "react-router-dom";

function Update() {

    console.log(useParams())
    const {id}=useParams()
    const [username, setUsername] = useState('')
    const [duration, setDuration] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())

    useEffect(() => {
       axios.get('http://localhost:5000/exercise/'+id)
       .then(res => {console.log(res)
       setUsername(res.data.username)
        setDuration(res.data.duration)
        setDescription(res.data.description)
        setDate(res.data.date)
        console.log(username)
    }
       )
       .catch(e => console.log(e))
        
    }, [])

    function onchangevalue(e) {
        const { name, value } = e.target
        if (name === 'username') {
            setUsername(value)
        } else if (name === 'dura') {
            setDuration(value)
        } else if (name === 'desc') {
            setDescription(value)
        }

    }

    function onsubmitt(){
        const newData={
            usernaam:username,
            desc:description,
            dura:duration,
            dat:date
        }
        axios.put('http://localhost:5000/exercise/updated/'+id,newData)
        .then(res => console.log(res))
    
        .catch(e => console.log(e))
        window.location='/'
    }
    
    
    return (
        <div>
            <Navbar />
            <form action="/" onSubmit={onsubmitt} className='container'>
                    <div className="form-group ">
                        <label for="exampleInputEmail1">username</label>
                        <input onChange={onchangevalue} value={username} name='username' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">duration</label>
                        <input onChange={onchangevalue} name='dura' value={duration} type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">description</label>
                        <input onChange={onchangevalue} name='desc' value={description} type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">date</label>
                        <input onChange={onchangevalue} name='dat' value={date} type="date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </form>

        </div>
    )
}

export default Update


// export default class Update extends Component {
//     constructor() {
//         super()
//         this.state = {
//             username: '',
//             duration: '',
//             description: '',
//             date: new Date()
//         }
//         this.onchangevalue = this.onchangevalue.bind(this)
//         this.onsubmitt = this.onsubmitt.bind(this)
//     }
//     componentDidMount() {
//         console.log('this.props.params')

//         // console.log(this.props.match.params.id)
//         axios.get(`http://localhost:5000/exercise/${this.props.match.params.id}`)
//             .then((res) => {
//                 console.log(this.props.match.params.id,"-aaya-",res.data)
//                 // this.setState({
//                 //     username:res.data.usernaam
//                 // })
//             })
//             .catch(e => console.log(e))

//     }
    // onchangevalue(e) {
    //     const { name, value } = e.target
    //     if (name === 'username') {
    //         this.setState({
    //             username: value
    //         })
    //     } else if (name === 'dura') {
    //         this.setState({
    //             duration: value
    //         })
    //     } else if (name === 'desc') {
    //         this.setState({
    //             description: value
    //         })
    //     }

    // }
//     onsubmitt(e) {
//         e.preventDefault()
//         const createexercise = {
//             usernaam: this.state.username,
//             desc: this.state.description,
//             dura: this.state.duration,
//             dat: this.state.date,

//         }
//         // axios.put('http://localhost:5000/exercise/updated/'+this.props.match.params._id,createexercise)
//         // .then(res => console.log(res,"---",res.data))
//         // .catch(e => console.log(e))


//         window.render = "/"
//     }

//     render() {
//         console.log(this.state)

//         return (
//             <div>
//                 <Navbar />
                // <form action="/" onSubmit={this.onsubmitt} className='container'>
                //     <div className="form-group ">
                //         <label for="exampleInputEmail1">username</label>
                //         <input onChange={this.onchangevalue} name='username' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                //         <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                //     </div>
                //     <div className="form-group">
                //         <label for="exampleInputPassword1">duration</label>
                //         <input onChange={this.onchangevalue} name='dura' type="number" className="form-control" id="exampleInputPassword1" />
                //     </div>
                //     <div className="form-group">
                //         <label for="exampleInputPassword1">description</label>
                //         <input onChange={this.onchangevalue} name='desc' type="text" className="form-control" id="exampleInputPassword1" />
                //     </div>
                //     <div className="form-group">
                //         <label for="exampleInputPassword1">date</label>
                //         <input onChange={this.onchangevalue} name='dat' type="date" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                //     </div>
                //     <button type="submit" className="btn btn-primary my-3">Submit</button>
                // </form>

//             </div>
//         )
//     }
// }
