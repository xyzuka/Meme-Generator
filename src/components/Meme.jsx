import React from 'react';
import { useState } from 'react';
import memesData from '../../memesData'

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState('http://i.imgflip.com/1bij.jpg');

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memeDataArray = allMemeImages.data.memes
    const randomArrayNumber = Math.floor(Math.random() * memeDataArray.length)
    const memeUrl = memeDataArray[randomArrayNumber].url
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: memeUrl
      }
    })
  }

  return (
    <div className='contents-container'>
      <div className='form-container'>
          <input type="text" placeholder='top text'/>
          <input type="text" placeholder='bottom text'/> 
          <button className='button' onClick={getMemeImage}>Get new meme image 🤣</button>
      </div>
      <img src={meme.randomImage} className="meme-image" />
    </div>
  )
}