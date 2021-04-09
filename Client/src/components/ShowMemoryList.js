import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MemoryCard from './MemoryCard'
import { Navbar, Nav } from 'react-bootstrap'

class ShowMemoryList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      memory: []
    }
  }

  componentDidMount () {
    axios
      .get('http://localhost:5000/memories')
      .then(res => {
        this.setState({
          memory: res.data
        })
      })
      .catch(err => {
        console.log('Error from ShowMemoryList')
      })
  }

  render () {
    const memory = this.state.memory
    console.log('PrintBook: ' + memory)
    let memoryList

    if (!memory) {
      memoryList = 'there is no book record!'
    } else {
      memoryList = memory.map((memory, k) => (
        <MemoryCard post={memory} key={k} />
      ))
    }

    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand className='justify-content-center' href='/'>
            Memories
          </Navbar.Brand>
          <Navbar.Collapse className='justify-content-end'>
            <Link to='/create-memories' className='btn btn-outline-warning '>
              + Add New Memories{' '}
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <div className='list'> {memoryList}</div>
      </div>

      // <div className="ShowBookList">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-12">
      //         <br />
      //         <h2 className="display-4 text-center"> List</h2>
      //       </div>

      //       <div className="col-md-11">
      //         <Link to="/create-memories" className="btn btn-outline-warning float-right">
      //           + Add New Memories
      //         </Link>
      //         <br />
      //         <br />
      //         <hr />
      //       </div>

      //     </div>

      //     <div className="list">
      //           {memoryList}
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default ShowMemoryList
