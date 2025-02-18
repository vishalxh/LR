import React from 'react'
import './../../../App.css'
import pic from '../../../assets/Screenshot 2025-02-17 at 2.29.31 AM.png'
import {Draggable} from 'react-draggable'
import { Link } from 'react-router-dom'
const firstpage = ({pop,modal}) => {
    
  return (
    <div className='modal'>
      <div className="overlay"></div>
      <div className="modal-content">
        <img src={pic} alt="" />
        <button onClick={pop} className='close'>Close</button>
        <Link to='/game'><button className='newpage'>What if</button></Link>
      </div>
    </div>
  )
}

export default firstpage