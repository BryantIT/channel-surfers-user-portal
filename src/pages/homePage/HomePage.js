import React, { Fragment, useState, useEffect } from 'react'
import './style.css'
// Components
import Preloader from '../../components/utility/preloader/Preloader'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return isLoaded ? (
    <Fragment>
      <div className='rock_welcome_note rock-welcome-main-wrapper'>
        <div>Hello Home Page</div>
      </div>
    </Fragment>
  ) : (
    <Preloader />
  )
}

export default HomePage
