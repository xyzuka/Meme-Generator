/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */

import React from 'react';

export default function Meme() {
  return (
      <form action="" className='form-container'>
          <input type="text" placeholder='top text'/>
          <input type="text" placeholder='bottom text'/> 
          <button className='button'>Get new meme image 🤣</button>
      </form>
  )
}
