import Image from 'next/image'
import React from 'react'

export const AboutMe = () => {
  return (
    <section id='about-me' className='about-me'>
      <h2 className='title hide-desktop'>A LITTLE BIT ABOUT ME</h2>
      <div className='about-me__container'>
        <div className='img-box'>
          <Image width={216} height={210} src='/img/perfil.jpeg' alt='imagen de presentación' />
          <p className='features__info'>
            <i className='fas fa-map-marked-alt'></i> Argentina, Corrientes
          </p>
        </div>

        <div className='content'>
          <h2 className='title hide-mobile'>A LITTLE BIT ABOUT ME</h2>
          <p>
            Hello, my name is Diego. <span>I&apos;m passionate</span> about technology since I was a kid, currently I
            have the possibility to create it and I won&apos;t miss the opportunity.
            <br /> I&apos;m a <span>Web Developer</span> with <span>2+ year of experience</span>, focused on the{' '}
            <span>React</span> ecosystem, specialized in <span>Javascript</span> but with the necessary adaptability to
            face new challenges.
            <br /> I am interested in working in <span>constant learning</span> environments, in how many technologies,
            I choose to keep expanding my experience in <span>React</span> and <span>Next.js</span>. Working in{' '}
            <span>Web 3.0</span> would be a great motivation for my selection.
          </p>
        </div>
      </div>
    </section>
  )
}
