import React from 'react'

const listTechnologies = ['show all', 'css', 'html', 'sass', 'bootstraps', 'javascript', 'react']

export const MyProjects = () => {
  return (
    <section id='projects' className='portfolio'>
      <div className='overlay has-fade'></div>
      <h1 className='title'>My Projects</h1>

      <div className='filters'>
        {listTechnologies.map((item, index) => (
          <button key={index} className='filter-option' data-filter={item}>
            {item}
          </button>
        ))}
      </div>

      <div className='list portfolio-items'>
        {/* <!--  Linkedin clone --> */}
        <figure className='portfolio-item css sass react redux firebase  *'>
          <img loading='lazy' src='./img/linkedin-clone-home.jpg' alt='profile card component Frontend Mentor' />
          <figcaption>
            <h2 className='portfolio-title'>Linkedin Clone</h2>
            <button className='portfolio-link'>más...</button>
          </figcaption>

          {/* <!-- Portfolio Modal 2 --> */}
          <div className='portfolio-modal' data-backdrop='static'>
            <div className='times-modal'>
              <a href='#'>
                <i className='fas fa-times'></i>
              </a>
            </div>
            <div className='portfolio-modal__image-box hide-for-mobile'>
              <img loading='lazy' src='./img/linkedin-clone-home.jpg' />
            </div>
            <div className='portfolio-modal__desc-container'>
              <h2>Linkedin Clone</h2>
              <div className='filters'>
                <button className='filter-option'>React</button>
                <button className='filter-option'>sass</button>
                <button className='filter-option'>redux</button>
                <button className='filter-option'>firebase</button>
              </div>
              <p>Description</p>
              <div className='desc-box'>
                <p className='portfolio-desc'>
                  This is a <strong>Linkedin</strong> clone project made with <strong>React</strong> and the backend
                  implementation in <strong>Firebase</strong>. The main functions are <strong>Login with Google</strong>{' '}
                  (Logout), and
                  <strong>Create Posts</strong>. This project encompasses the following: How to handle authentication
                  with Firebase. How to upload images to <strong>Firebase Storage</strong> and use them! Real-time
                  database with Firebase&apos;s <strong>Firestore</strong>! Status management with{' '}
                  <strong>Redux Toolkit</strong>. Components with <strong>Styled Components</strong>.
                </p>
              </div>
              <div className='desc-buttons-box'>
                <a href='https://linkedin-clone-two.vercel.app' rel='noreferrer' target='_blank'>
                  {' '}
                  <i className='far fa-eye'></i> demo
                </a>
                <a href='https://github.com/d1eshi/linkedin-clone' rel='noreferrer' target='_blank'>
                  <i className='fas fa-code'></i> code
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Portfolio /Modal  --> */}
        </figure>

        {/* <!-- Item 9 --> */}
        <figure className='portfolio-item javascript react firebase typescript *'>
          <img loading='lazy' src='./img/amazon-clone.jpg' alt='Amazon clone home' />
          <figcaption>
            <h2 className='portfolio-title'>Amazon Clone</h2>
            <a href='#' className='portfolio-link'>
              more...
            </a>
          </figcaption>

          {/* <!-- Portfolio Modal 9 --> */}
          <div className='portfolio-modal'>
            <div className='times-modal'>
              <a href='#'>
                <i className='fas fa-times'></i>
              </a>
            </div>
            <div className='portfolio-modal__image-box hide-for-mobile'>
              <img loading='lazy' src='./img/amazon-clone.jpg' />
            </div>
            <div className='portfolio-modal__desc-container'>
              <h2>Amazon Clone</h2>
              <div className='filters'>
                <button type='button' className='filter-option'>
                  javascript
                </button>
                <button type='button' className='filter-option'>
                  react
                </button>
                <button type='button' className='filter-option'>
                  typescript
                </button>
                <button type='button' className='filter-option'>
                  Firebase
                </button>
                <button type='button' className='filter-option'>
                  Moment
                </button>
                <button type='button' className='filter-option'>
                  sass
                </button>
                <button type='button' className='filter-option'>
                  stripe
                </button>
              </div>
              <p>about</p>
              <div className='desc-box'>
                <p className='portfolio-desc'>
                  Hey! This project is a <strong>Full-Stack AMAZON Clone</strong> with{' '}
                  <strong>FULL E-Commerce Functionality</strong> 👇🏼 1️⃣ <strong>Accounts and Login Page</strong> 👨👩👦
                  2️⃣ Products Page 📦 3️⃣ Cart and Checkout Page 🛒 4️⃣ <strong>Real Payments</strong> 💳 <br /> 5️⃣ Order
                  History 📖
                </p>
              </div>
              <div className='desc-buttons-box'>
                <a href='https://amazon-clone-d1eshi.vercel.app/' rel='noreferrer' target='_blank'>
                  {' '}
                  <i className='far fa-eye'></i> demo
                </a>
                <a href='https://github.com/d1eshi/amazon-clone' rel='noreferrer' target='_blank'>
                  <i className='fas fa-code'></i> code
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Portfolio /Modal  --> */}
        </figure>
      </div>
    </section>
  )
}
