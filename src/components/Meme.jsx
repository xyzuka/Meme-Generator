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

  function handleChange(event) {
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value
      }
    })
  }

  console.log(meme)

  return (
    <div className='contents-container'>
      <div className='form-container'>
          <input 
            type="text" 
            placeholder='top text'
            onChange={handleChange}
            name="topText"
            value={meme.topText}
          />
          <input 
            type="text" 
            placeholder='bottom text'
            onChange={handleChange}
            name="bottomText"
            value={meme.bottomText}
          /> 
          <button 
            className='button' 
            onClick={getMemeImage}>Get new meme image 🤣</button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}