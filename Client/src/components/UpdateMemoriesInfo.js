import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

class UpdatememoryInfo extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      creator: '',
      message: '',
      productImage: ''
    }
  }
  componentDidMount () {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/memories/' + this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          creator: res.data.creator,
          message: res.data.message,
          productImage: res.data.productImage
        })
      })
      .catch(err => {
        console.log('Error from UpdateMemoriesInfo')
      })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onChange2 = e => {
    this.setState({ productImage: e.target.files[0] })
  }

  saveHandler = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('productImage', this.state.productImage)
    formData.append('title', this.state.title)
    formData.append('creator', this.state.creator)
    formData.append('message', this.state.message)
    // console.log(this.state.productImage)
    axios
      .put('http://localhost:5000/memories/' + this.props.match.params.id, formData)
      .then(res => {
        this.props.history.push('/show-memories/' + this.props.match.params.id)
      })
      .catch(err => {
        console.log('Error in UpdateMemoryInfo!')
      })
  }
  render () {
    // const { title, creator, message, productImage } = this.state
    return (
      <div className='CreateBook'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <br />
              <Link to='/' className='btn btn-outline-warning float-left'>
                Show Memories List
              </Link>
            </div>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Add Memories</h1>
              <p className='lead text-center'>Create new Memories</p>

              <form noValidate onSubmit={this.saveHandler}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Memories'
                    name='title'
                    className='form-control'
                    value={this.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Creator'
                    name='creator'
                    className='form-control'
                    value={this.creator}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Message'
                    name='message'
                    className='form-control'
                    value={this.message}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='file'
                    placeholder='file'
                    name='productImage'
                    className='form-control'
                    value={this.productImage}
                    onChange={this.onChange2}
                  />
                </div>

                <input
                  type='submit'
                  className='btn btn-outline-warning btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdatememoryInfo

// class UpdatememoryInfo extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       title: '',
//       creator: '',
//       message: '',
//       date: '',
//     }
//   }

// componentDidMount () {
//   // console.log("Print id: " + this.props.match.params.id);
//   axios
//     .get('http://localhost:5000/memories/' + this.props.match.params.id)
//     .then(res => {
//       // this.setState({...this.state, book: res.data})
//       this.setState({
//         title: res.data.title,
//         creator: res.data.creator,
//         message: res.data.message,
//         date: res.data.published_date
//       })
//     })
//     .catch(err => {
//       console.log('Error from UpdateMemoriesInfo')
//     })
// }

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   onSubmit = e => {
//     e.preventDefault()

//     const data = {
//       title: this.state.title,
//       creator: this.state.creator,
//       message: this.state.message,
//       date: this.state.date
//     }

//   axios
//     .put(
//       'http://localhost:5000/memories/' + this.props.match.params.id,
//       data
//     )
//     .then(res => {
//       this.props.history.push('/show-memories/' + this.props.match.params.id)
//     })
//     .catch(err => {
//       console.log('Error in UpdateMemoryInfo!')
//     })
// }

//   render () {
//     return (
//       <div className='UpdateBookInfo'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-md-8 m-auto'>
//               <br />
//               <Link to='/' className='btn btn-outline-warning float-left'>
//                 Show Memories List
//               </Link>
//             </div>
//             <div className='col-md-8 m-auto'>
//               <h1 className='display-4 text-center'>Edit memory</h1>
//               <p className='lead text-center'>Update Memories Info</p>
//             </div>
//           </div>

//           <div className='col-md-8 m-auto'>
//             <form noValidate onSubmit={this.onSubmit}>
//             <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='Title of the Memories'
//                     name='title'
//                     className='form-control'
//                     value={this.state.title}
//                     onChange={this.onChange}
//                   />
//                 </div>
//                 <br />

//                 <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='Creator'
//                     name='creator'
//                     className='form-control'
//                     value={this.state.creator}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='Message'
//                     name='message'
//                     className='form-control'
//                     value={this.state.message}
//                     onChange={this.onChange}
//                   />
//                 </div>

//                 <div className='form-group'>
//                   <input
//                     type='text'
//                     placeholder='Date'
//                     name='date'
//                     className='form-control'
//                     value={this.state.date}
//                     onChange={this.onChange}
//                   />
//                 </div>
//               <button
//                 type='submit'
//                 className='btn btn-outline-info btn-lg btn-block'
//               >
//                 Update Memories
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default UpdatememoryInfo
