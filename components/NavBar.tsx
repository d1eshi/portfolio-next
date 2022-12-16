import React, { createRef, FC, useRef, LegacyRef } from 'react'

interface Props {}

export const Navbar: FC<Props> = () => {
  const refHeader = useRef<HTMLElement>(null)

  const toggleShowMenu = () => {
    const body = document.querySelector('body')
    const fadeElms = document.querySelectorAll('.has-fade')

    if (!refHeader?.current?.className.includes('open')) {
      // open menu
      body?.classList.add('no-scroll')
      refHeader.current?.classList.add('open')
      refHeader.current?.classList.add('open')
      fadeElms.forEach(function (element) {
        element.classList.remove('fade-out')
        element.classList.add('fade-in')
      })
    } else {
      // close menu
      body?.classList.remove('no-scroll')
      refHeader.current.classList.remove('open')
      fadeElms.forEach(function (element) {
        element.classList.remove('fade-in')
        element.classList.add('fade-out')
      })
    }
  }

  return (
    <header ref={refHeader} className='header'>
      <div className='overlay has-fade'></div>
      <nav id='nav'>
        <a onClick={toggleShowMenu} id='bntHamburguer' className='header__toggle hide-for-desktop'>
          <span></span>
          <span></span>
          <span></span>
        </a>

        <div className='header__links hide-for-mobile'>
          {/* <!-- change language --> */}
          <div className='container__btn-languages'>
            <button className='btn-language es' id='en' lang='en'>
              Eng
            </button>
            <span>|</span>
            <button className='btn-language es' id='es' lang='es'>
              Esp
            </button>
          </div>

          {/* <!-- Links --> */}
          <a href='#about-me'>About Me </a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact me</a>
          <a href='#contact'>Services</a>
          <button className='btn-resume'>
            <a href='docs/Web-Developer-Silva-Diego.pdf' download className='download-btn'>
              Download Resume
            </a>
          </button>
        </div>
      </nav>

      {/* <!-- mobile menu  --> */}
      <div className='header__menu has-fade'>
        <a className='' href='#about-me'>
          About Me
        </a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact me</a>
        <button className='btn-resume'>
          <a href='docs/Web-Developer-Silva-Diego.pdf' download className='download-btn'>
            Download Resume
          </a>
        </button>

        {/* <!-- change language --> */}
        <div className='container__btn-languages'>
          <button className='btn-language' id='en' lang='en'>
            Eng
          </button>
          <span>|</span>
          <button className='btn-language' id='es' lang='es'>
            Esp
          </button>
        </div>
      </div>
    </header>
  )
}
