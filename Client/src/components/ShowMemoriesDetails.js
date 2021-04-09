import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

class showMemoryDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      memory: {}
    }
  }

  componentDidMount () {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/memories/' + this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          memory: res.data,
        })
      })
      .catch(err => {
        console.log('Error from ShowBookDetails')
      })
  }

  onDeleteClick (id) {
    axios
      .delete('http://localhost:5000/memories/' + id)
      .then(res => {
        this.props.history.push('/')
      })
      .catch(err => {
        console.log('Error form ShowBookDetails_deleteClick')
      })
  }

  render () {
    const memory = this.state.memory
    let MemoryItem = (
      <div>
        <table className='table table-hover table-dark'>
          {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Title</td>
              <td>{memory.title}</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Creator</td>
              <td>{memory.creator}</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Message</td>
              <td>{memory.message}</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Image</td>
              <td>{memory.photoImage}</td>
            </tr>
            <tr>
              <th scope='row'>4</th>
              <td>Date</td>
              <td>{memory.date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )

    return (
      <div className='ShowBookDetails'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 m-auto'>
              <br /> <br />
              <Link to='/' className='btn btn-outline-warning float-left'>
                Show memories List
              </Link>
            </div>
            <br />
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Book's Record</h1>
              <p className='lead text-center'>View Book's Info</p>
              <hr /> <br />
            </div>
          </div>
          <div>{MemoryItem}</div>

          <div className='row'>
            <div className='col-md-6'>
              <button
                type='button'
                className='btn btn-outline-danger btn-lg btn-block'
                onClick={this.onDeleteClick.bind(this, memory._id)}
              >
                Delete Memories
              </button>
              <br />
            </div>

            <div className='col-md-6'>
              <Link
                to={`/edit-memories/${memory._id}`}
                className='btn btn-outline-info btn-lg btn-block'
              >
                Edit Memories
              </Link>
              <br />
            </div>
          </div>
          {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}
        </div>
      </div>
    )
  }
}

export default showMemoryDetails 
