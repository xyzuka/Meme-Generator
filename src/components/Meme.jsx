import React from 'react';
import { useState } from 'react';
import memesData from '../../memesData'

export default function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
  const [memeImage, setMemeImage] = React.useState('');

  function getMemeImage() {
    const memeDataArray = memesData.data.memes
    const randomArrayNumber = Math.floor(Math.random() * memeDataArray.length)
    const memeUrl = memeDataArray[randomArrayNumber].url
    setMemeImage(memeUrl)
  }

  return (
    <div className='contents-container'>
      <div className='form-container'>
          <input type="text" placeholder='top text'/>
          <input type="text" placeholder='bottom text'/> 
          <button className='button' onClick={getMemeImage}>Get new meme image 🤣</button>
      </div>
      <img src={memeImage} className="meme-image" />
    </div>
  )
}