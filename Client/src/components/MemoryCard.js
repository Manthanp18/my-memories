import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Card } from 'react-bootstrap'

const MemoryCard = props => {

  const memory = props.post

  return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant='top'  src={`http://localhost:5000/${memory.productImage}`}/>
      <Card.Body>
        <Card.Title>
          <Link to={`/show-memories/${memory._id}`}>{memory.title}</Link>
        </Card.Title>
        <p>{memory.creator}</p>
        <Card.Text>{memory.message}</Card.Text>
      </Card.Body>
    </Card>
  )
}
// <div className='card-container'>
//  <img src={`http://localhost:5000/${memory.productImage}`} alt=""/>
//   <div className='desc'>
//     <h2>
//       <Link to={`/show-memories/${memory._id}`}>{memory.title}</Link>
//     </h2>
//     <h3>{memory.creator}</h3>
//     <p>{memory.message}</p>
//   </div>
// </div>
export default MemoryCard
