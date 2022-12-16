import React from 'react'

export const Hero = () => {
  return (
    <section className='main-content' id='home'>
      <div className='headline'>
        <h2>
          Web <span>Developer</span>
          <span>building</span> new <span>solutions</span>
        </h2>
      </div>
      <div className='btn-about-me'>
        <h2>Learn more about what I do</h2>
        <a href='#about-me'>
          <div className='scroll-down'></div>
        </a>
      </div>
    </section>
  )
}
