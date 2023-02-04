import React from 'react'
import { AiFillQuestionCircle} from 'react-icons/ai';
import './menuSidebar.css'
export function MenuSidebar() {
  return (
    <>
      <div className='sidebar-container'>
        <img className='logo-img' src="https://images.vexels.com/media/users/3/137349/isolated/preview/7b8717630942d7fb84ae3c74b0602c0f-minimalismo-del-logo-del-corazon.png" alt="" />
        <h1 className='title-restaurant-name'>Luxury Restaurant</h1>

        <ul className='luxury-web-list'>
          <a href="about-us"><li className='luxury-web-list-li'>Welcome to Luxury</li></a>
          <a href="/"><li className='luxury-web-list-li'>Menu</li></a>
          <a href="/reservation"><li className='luxury-web-list-li'>Make your Reservation</li></a>
        </ul>

        <div className='for-help'>
          <AiFillQuestionCircle/>
          <span>Help</span>
        </div>
      </div>
    </>
  )
}
