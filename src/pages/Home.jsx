import React from 'react'

import imageHome from '../images/secret.svg'

import { HomeContent, Content } from '../Styles/Home'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <HomeContent>
      <Content>
        <h1>Welcome to Secret Friend</h1>
        <div className='content-body'>
          <img src={imageHome} alt='home' />
          <Link to='/start' className='content-button'>
            Start secret Friend
          </Link>
        </div>
      </Content>
    </HomeContent>
  )
}
