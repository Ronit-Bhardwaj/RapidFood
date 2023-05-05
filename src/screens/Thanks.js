import React from 'react'
import './Thanks.css';
import { Link } from 'react-router-dom'
export default function Thanks() {
  return (
    <div className = 'thanks'>
        <div className = 'thankyou'>
        
        <img src = "https://thumbs.dreamstime.com/b/thank-you-your-order-sign-price-tag-paper-against-textured-red-shopping-appreciation-concept-209817193.jpg" />
    </div>
    <div className = 'back'>
        <Link to="/" className="m-3 mx-1 btn btn-danger">Back to Home</Link>
    </div>
    </div>
    
    
  )
}
