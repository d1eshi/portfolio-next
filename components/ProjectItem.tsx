import React, { FC } from 'react'

interface Props {
  titleProject: string
  description: string
  image: {
    urlPublic: string
    alt: string
  }
  technologiesTags: string[]
  links: {
    demo: string
    repository: string
  }
}

export const ProjectItem: FC<Props> = ({ titleProject, image, technologiesTags, description, links }) => {
  return (
    <figure className='portfolio-item css sass react redux firebase  *'>
      <img loading='lazy' src={image.urlPublic} alt={image.alt} />
      <figcaption>
        <h2 className='portfolio-title'>{titleProject}</h2>
        <button className='portfolio-link'>más...</button>
      </figcaption>

      {/* <!-- Portfolio Modal 2 --> */}
      <div className='portfolio-modal' data-backdrop='static'>
        <div className='times-modal'>
          <button>
            <i className='fas fa-times'></i>
          </button>
        </div>
        <div className='portfolio-modal__image-box hide-for-mobile'>
          <img src={image.urlPublic} alt={image.alt} />
        </div>
        <div className='portfolio-modal__desc-container'>
          <h2>{titleProject}</h2>
          <div className='filters'>
            {technologiesTags.map((tag, index) => (
              <button key={index} className='filter-option'>
                {tag}
              </button>
            ))}
          </div>
          <p>Description</p>
          <div className='desc-box'>
            <p className='portfolio-desc'>{description}</p>
          </div>
          <div className='desc-buttons-box'>
            <a href={links.demo} rel='noreferrer' target='_blank'>
              {' '}
              <i className='far fa-eye'></i> demo
            </a>
            <a href={links.repository} rel='noreferrer' target='_blank'>
              <i className='fas fa-code'></i> code
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio /Modal  --> */}
    </figure>
  )
}
