import React from 'react'
import './foodMenu.css'
export function FoodMenu() {
  return (
    <>
        <ul className='foodMenu-list-ul'>
            <li className='foodMenu-list-li'>Food</li>
            <li className='foodMenu-list-li'>Drinks</li>
            <li className='foodMenu-list-li'>Dessert</li>
        </ul>
        <div className='foodMenu-division'></div>
    </>
  )
}

