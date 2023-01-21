import React, { Fragment, useState, useEffect } from 'react'
import './style.css'
// Components
import Preloader from '../../components/utility/preloader/Preloader'
import Welcome from '../../components/welcome/Welcome'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return isLoaded ? (
    <Fragment>
      <div className='rock_welcome_note rock-welcome-main-wrapper'>
        <Welcome />
      </div>
    </Fragment>
  ) : (
    <Preloader />
  )
}

export default HomePage
