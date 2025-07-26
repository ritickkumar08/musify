import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import Albumitem from './Albumitem'
import { songsData } from '../assets/assets'
import Songitem from './Albumitem'

const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>featured chats</h1>
        <div className='flex gap-4 overflow-x-auto whitespace-nowrap scroll-smooth px-2'>
             {albumsData.map((item,index) =>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>) )}
        </div>
       
    </div> 
    <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hit</h1>
        <div className='flex gap-4 overflow-x-auto whitespace-nowrap scroll-smooth px-2'>
             {songsData.map((item,index) =>(<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>) )}
        </div> 
    </div>
    </> 
  )
}

export default DisplayHome