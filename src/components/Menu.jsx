import React from 'react'
import '../styles/menu.css'

export default function Menu() {
  return (
    <div
      className='background'
    >
      <h2 className='menu-heading'>Let's Play Trivia!</h2>
      <p className='menu-text'>Select a topic you would like to be quizzed on</p>
      <button className='menu-button'>Start Quiz!</button>
      <span className='blob-1'></span>
      <span className='blob-2'></span>
    </div>
  )
}