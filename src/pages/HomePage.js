import React, { Fragment, useState, useEffect } from 'react'
// Components
import Preloader from '../components/utility/preloader/Preloader'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
      isLoaded ? 
      <Fragment>
        <div>Hello Home Page</div>
      </Fragment> : <Preloader />
  )
}

export default HomePage