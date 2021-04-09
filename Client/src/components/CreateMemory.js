import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
// import FileBase from 'react-file-base64'
import axios from 'axios'


// const CreateMemories = () => {
//   const [title, setTitle] = useState("");
//   const [creator, setCreator] = useState("");
//   const [message, setMessage] = useState("");
//   const [selectedFile, setSelectedFile] = useState("null");

//   const submitForm = () => {
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("creator", creator);
//     formData.append("message", message);
//     formData.append("file", selectedFile);
  
//     axios
//       .post('http://localhost:5000/memories', formData)
//       .then((res) => {
//         alert("File Upload success");
//       })
//       .catch((err) => alert("File Upload Error"));
//   };

//   return (
//     <div className="App">
//       <form>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           value={creator}
//           onChange={(e) => setCreator(e.target.value)}
//         />
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />

//         <input
//           type="file"
//           value={selectedFile}
//           onChange={(e) => setSelectedFile(e.target.files[0])}
//         />
//          <button onClick={submitForm}>Submit</button>
//       </form>
//     </div>
//   );
// };

class CreateMemories extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      creator: '',
      message: '',
      productImage: ''
    }
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
    formData.append('productImage', this.state.productImage);
    formData.append('title', this.state.title);
    formData.append('creator', this.state.creator);
    formData.append('message', this.state.message);
    // console.log(this.state.productImage)
    axios.post("http://localhost:5000/memories",formData,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
           this.setState({title:res.data.results.title});
           this.setState({creator:res.data.results.creator});
           this.setState({message:res.data.results.message});
           this.setState({productImage:res.data.results.productImage});
           this.props.history.push('/')
        })
        .catch(err=>console.log(err))
  }
  // onSubmit = e => {
  //   e.preventDefault()
  //   let formData = new Formdata();
  //   formData.append('productImage', this.state.productImage)

  //   const data = {
  //     title: this.state.title,
  //     creator: this.state.creator,
  //     message: this.state.message,
  //     productImage: this.state.productImage,
  //     date: this.state.date,

  //   }

  //   axios
  //     .post('http://localhost:5000/memories', data)
  //     .then(res => {
  //       this.setState({
  //         title: '',
  //         creator:'',
  //         message:'',
  //         productImage:'',
  //         date:'',

  //       })
  //       this.props.history.push('/')
  //     })
  //     .catch(err => {
  //       console.log('Error in CreateMemories!')
  //     })
  // }

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

export default CreateMemories
