import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai';
import './footerLR.css'

export function FooterLR() {
  return (
    <footer>
        <div className="footer-container">
        <p className='footer-title'>Follow us: </p>
        <div className="icons-container">
        < BsFacebook className='icons'/>
        < AiFillTwitterCircle className='icons'/>
        < AiFillYoutube className='icons'/>
        < FaTiktok className='icons'/>
        </div>
        
        </div>
        
    </footer>
  )
}

