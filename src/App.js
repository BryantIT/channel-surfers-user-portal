import React, { Fragment } from 'react'
// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CountDown from './components/utility/countdown/CountDown'
// Pages
import Home from './pages/Home'
import AlbumPage from './pages/AlbumPage'
import AlbumsPage from './pages/AlbumsPage'
import ArtistPage from './pages/ArtistPage'
import BlogsPage from './pages/BlogsPage'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import EventPage from './pages/EventPage'
import EventsPage from './pages/EventsPage'
import MembersPage from './pages/MembersPage'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import GalleryPage from './pages/GalleryPage'
// Router
import { Routes, Route } from 'react-router-dom'
// Styles
import './App.css'

function App() {
  return (
    <Fragment>
      <Header />
      <div className='site-content'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/album' element={<AlbumPage />} />
        </Routes>
        <Routes>
          <Route path='/albums' element={<AlbumsPage />} />
        </Routes>
        <Routes>
          <Route path='/artist' element={<ArtistPage />} />
        </Routes>
        <Routes>
          <Route path='/blogs' element={<BlogsPage />} />
        </Routes>
        <Routes>
          <Route path='/blog' element={<BlogPage />} />
        </Routes>
        <Routes>
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Routes>
          <Route path='/event' element={<EventPage />} />
        </Routes>
        <Routes>
          <Route path='/events' element={<EventsPage />} />
        </Routes>
        <Routes>
          <Route path='/members' element={<MembersPage />} />
        </Routes>
        <Routes>
          <Route path='/product' element={<ProductPage />} />
        </Routes>
        <Routes>
          <Route path='/products' element={<ProductsPage />} />
        </Routes>
        <Routes>
          <Route path='/gallery' element={<GalleryPage />} />
        </Routes>
      </div>
      <Footer />
      <CountDown />
    </Fragment>
  )
}

export default App
