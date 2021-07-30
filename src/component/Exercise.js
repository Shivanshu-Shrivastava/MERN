import React, { Component } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Row(porps) {
//    function deletee(id){
//             console.log('ha delelte ho rha')
//     }
    // console.log(porps.desrow.description);
    return (
        <tr>
          <td className='d-flex justify-content-around'>
              <span className="">{porps.desrow.description}</span>
              <span><Link to={'/update/'+porps.desrow._id}>Edit</Link> | <a onClick={()=>porps.deleteme(porps.desrow._id)}  href='#'>Delte</a></span>
              </td>  
        </tr>
    )
}

export { Row}


export default class Exercise extends Component {
    constructor() {
        super()
        this.state = {
            descr: []
        }
        this.deletemethod=this.deletemethod.bind(this)
    }
    deletemethod(id){
        axios.delete(`http://localhost:5000/exercise/${id}`,)
        .then(res => console.log(res.data))
        .catch(e => console.log(e))
        this.setState({
            descr:this.state.descr.filter(el => el._id !== id)
        })
    }
    componentDidMount() {

        axios.get("http://localhost:5000/exercise")
            .then(res => {
                // console.log(res.data)
                this.setState({
                    descr: res.data
                })
            })
            .catch(e => console.log(e))
    }
    render() {
        // console.log(this.state.descr.description);
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <table class="table table-striped">
                        
                        <tbody>
                         
                                {this.state.descr.map(num=><Row desrow={num} deleteme={this.deletemethod} />)}
                            
                            
                        </tbody>
                    </table>
                    {/* {this.state.descr.map(num => <h5>{num}</h5>)} */}
                </div>
            </div>
        )
    }
}
