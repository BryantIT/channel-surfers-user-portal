import React, { Fragment, useState, useEffect } from 'react'
// Components
import Preloader from '../components/utility/preloader/Preloader'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  return (
    <Fragment>
    {
      isLoaded ? <h1>Hello Home Page</h1> : <Preloader />
    }
      
    </Fragment>
  )
}

export default HomePage