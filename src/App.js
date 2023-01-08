import React, { Fragment, useEffect, useState } from 'react'
// Components
// Pages
import HomePage from './pages/HomePage'
// Router
import { Routes, Route } from 'react-router-dom'
// Styles
import './App.css'
// FireBase
import { storage, db } from '../src/firebase'
import { collection, getDocs } from 'firebase/firestore'
import SiteDataContext from './SiteDataContext'

function App() {
  // States
  const [siteData, setSiteData] = useState()
  const [loading, setLoading] = useState(true)
  // Get siteData and populate
  const getSiteData = async () => {
    console.log('1')
    let data
    console.log('2')
    const query = await getDocs(collection(db, 'site-data'))
    query.forEach((doc) => {
    console.log('3')
      const info = doc.data()
    console.log('4')
      data = {
        test: info.test,
      }
    })
    console.log('5')
    return data
  }
  useEffect(() => {
    getSiteData()
      .then((data) => {
        window.localStorage.setItem('siteData', JSON.stringify(data))
      })
      .then(() => {
        setSiteData(JSON.parse(window.localStorage.getItem('siteData')))
        setLoading(false)
        console.log('APP', JSON.parse(window.localStorage.getItem('siteData')))
      })
  }, [])

  return (
    <Fragment>
      {/* <Header /> */}
      <div className='site-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Fragment>
  )
}

export default App
